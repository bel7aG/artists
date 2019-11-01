import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchForm, Results } from 'components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { fecthArtists } from 'actions'
import styled from 'styled-components'

export const SHome = styled.div`
  position: relative;
`

const Home = ({ fecthArtists, artists }) => {
  const [text, setText] = useState('')
  console.log(artists)

  const handleSubmitForm = ({ searchField }) => {
    alert(searchField)
    setText(searchField)
  }

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

  useEffect(() => {
    if (search) {
      console.log(search)
      const { nodes, pageInfo, totalCount } = search.artists
      fecthArtists({ loading, error, payload: { nodes, pageInfo, totalCount } })
    }
  }, [loading])

  const handleLoadMoreArtists = () => {
    fetchMore({
      variables: {
        cursor: search.artists.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newArtists = fetchMoreResult.search.artists.nodes
        const pageInfo = fetchMoreResult.search.artists.pageInfo
        const nodes = [...previousResult.search.artists.nodes, ...newArtists]

        fecthArtists({
          loading,
          error,
          payload: { nodes, pageInfo, totalCount: artists.totalCount }
        })

        console.log(fetchMoreResult)

        return newArtists.length
          ? {
              // Put the new comments at the end of the list and update `pageInfo`
              // so we have the new `endCursor` and `hasNextPage` values
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
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log('hasNextPage')
  console.log(hasNextPage)
  return (
    <SHome>
      <Results
        handleLoadMoreArtists={handleLoadMoreArtists}
        data={artists.nodes}
        hasNextPage={hasNextPage}
        scrollbarClassName="scrollbar"
      >
        <SearchForm handleSubmitForm={handleSubmitForm} text={text} />
      </Results>
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
