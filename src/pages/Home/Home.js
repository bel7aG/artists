import React, { useState, useEffect } from 'react'
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
`

const Home = ({ fecthArtists, artists }) => {
  const [text, setText] = useState('')
  const [isTypingNewSearch, setIsTypingNewSearch] = useState(false)

  const {
    data: { search } = {},
    loading = false,
    error = null,
    fetchMore,

    networkStatus
  } = useQuery(ARTISTS_APOLLO_QUERY, {
    skip: !text || !/^[a-zA-Z]*$/.test(text) || loading,
    variables: {
      query: text
    }
  })

  const handleSubmitForm = ({ searchField }) => {
    setText(searchField)
    setIsTypingNewSearch(true)

    setTimeout(() => {}, 0)
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
        console.log('okokokok')
        console.log(nodes)
        setIsTypingNewSearch(false)
        fecthArtists({ loading, error, payload: { nodes, pageInfo, totalCount } })
      }
    }
  }, [search])

  const handleLoadMoreArtists = () => {
    fetchMore({
      variables: {
        cursor: search.artists.pageInfo.endCursor
      },
      notifyOnNetworkStatusChange: true,
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newArtists = fetchMoreResult.search.artists.nodes
        const pageInfo = fetchMoreResult.search.artists.pageInfo
        const nodes = [...previousResult.search.artists.nodes, ...newArtists]
        console.log('^^^^^^^^')
        console.log(previousResult)
        console.log(fetchMoreResult)
        console.log('^^^^^^^^')
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
  const {
    nodes,
    pageInfo: { hasNextPage }
  } = artists

  return (
    <SHome>
      <Results
        handleLoadMoreArtists={handleLoadMoreArtists}
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
              title
            }
          }
        }
      }
    }
  }
`

Home.propTypes = {
  fecthArtists: PropTypes.func.isRequired,
  artists: PropTypes.array.isRequired
}

const mapStateToProps = ({
  data: {
    artists: { artists }
  }
}) => ({
  artists
})

export default connect(
  mapStateToProps,
  { fecthArtists }
)(Home)
