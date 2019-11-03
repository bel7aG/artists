import React, { useState, useEffect } from 'react'
import { TweenMax } from 'gsap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchForm, Results, Loader } from 'components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { fecthArtists } from 'actions'
import styled from 'styled-components'
import { showTween, hideTween } from 'tweens'

export const SHome = styled.div`
  position: relative;
  z-index: 0;
`

const Home = ({ fecthArtists, artists, isSearchOpen }) => {
  const [text, setText] = useState('')
  const [isTypingNewSearch, setIsTypingNewSearch] = useState(false)

  useEffect(() => {
    if (!isSearchOpen) {
      TweenMax.to('.scrollbar', 0.3, { opacity: 0 })
    }
    if (!isSearchOpen) {
      TweenMax.to('.search-svg', 0.3, { opacity: 1 })
    }
  }, [])

  const {
    data: { search } = {},
    loading = false,
    error = null,
    fetchMore
  } = useQuery(ARTISTS_APOLLO_QUERY, {
    skip: !text || !/^[a-zA-Z]*$/.test(text) || loading,
    variables: {
      query: text
    }
  })

  const handleSubmitForm = ({ searchField }) => {
    setText(searchField)
    setIsTypingNewSearch(true)
  }

  useEffect(() => {
    if (search) {
      const { nodes, pageInfo, totalCount } = search.artists
      if (nodes.length) {
        hideTween('.search-svg', 0.8)
      } else {
        showTween('.search-svg', 0.8)
      }
      if (isTypingNewSearch) {
        setIsTypingNewSearch(false)
        fecthArtists({ loading, error, payload: { nodes, pageInfo, totalCount } })
      }
    }
  }, [search])

  const handleLoadMoreArtists = () => {
    if (search) {
      fetchMore({
        variables: {
          cursor: search.artists.pageInfo.endCursor
        },
        notifyOnNetworkStatusChange: true,
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newArtists = fetchMoreResult.search.artists.nodes
          const pageInfo = fetchMoreResult.search.artists.pageInfo
          const nodes = [...previousResult.search.artists.nodes, ...newArtists]

          setIsTypingNewSearch(false)

          fecthArtists({
            loading,
            error,
            payload: { nodes, pageInfo, totalCount: artists.totalCount }
          })

          return newArtists.length
            ? {
                search: {
                  __typename: previousResult.search.__typename,
                  artists: {
                    __typename: previousResult.search.artists.__typename,
                    nodes,
                    pageInfo: {
                      ...pageInfo,
                      __typename: previousResult.search.artists.pageInfo.__typename
                    }
                  }
                }
              }
            : previousResult
        }
      })
    }
  }
  const {
    nodes,
    pageInfo: { hasNextPage }
  } = artists

  return (
    <SHome className="home">
      <Results
        handleLoadMoreArtists={() => handleLoadMoreArtists()}
        data={nodes}
        hasNextPage={hasNextPage}
        scrollbarClassName="scrollbar"
      >
        <SearchForm
          disabled={loading}
          handleSubmitForm={handleSubmitForm}
          text={text}
        />
      </Results>
      <Loader load={loading} />
    </SHome>
  )
}

const ARTISTS_APOLLO_QUERY = gql`
  query Search($query: String!, $cursor: String) {
    search {
      __typename
      artists(query: $query, first: 40, after: $cursor) {
        __typename
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        nodes {
          __typename
          mediaWikiImages {
            descriptionURL
            url
          }
          id
          name
          sortName
          disambiguation
          genderID
          type
          country

          rating {
            value
          }
          works {
            edges {
              node {
                id
              }
            }
          }
          releases {
            nodes {
              media {
                title
                tracks {
                  length
                  recording {
                    title
                    length
                    video
                    rating {
                      voteCount
                      value
                    }
                    theAudioDB {
                      musicVideo {
                        likeCount
                        dislikeCount
                        url
                      }
                    }
                  }
                }
              }
              title
              country
              barcode
            }
          }
        }
      }
    }
  }
`

Home.propTypes = {
  fecthArtists: PropTypes.func.isRequired,
  artists: PropTypes.object.isRequired,
  isSearchOpen: PropTypes.bool.isRequired
}

const mapStateToProps = ({
  data: {
    artists: { artists }
  },
  mechanism: { search: isSearchOpen }
}) => ({
  artists,
  isSearchOpen
})

export default connect(
  mapStateToProps,
  { fecthArtists }
)(Home)
