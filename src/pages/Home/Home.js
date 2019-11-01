import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchForm, Results } from 'components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { fecthArtists } from 'actions'
import { useInfiniteScroll } from 'hooks'
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

  const { data, loading, error = null, fetchMore } = useQuery(ARTISTS_APOLLO_QUERY, {
    skip: !text || !/^[a-zA-Z]*$/.test(text) || loading,
    variables: {
      query: text
    }
  })

  useEffect(() => {
    if (data) {
      console.log(data)
      const { nodes, pageInfo, totalCount } = data.search.artists
      fecthArtists({ loading, error, payload: { nodes, pageInfo, totalCount } })
    }
  }, [loading])

  return (
    <SHome>
      <Results data={artists.nodes} scrollbarClassName="scrollbar">
        <SearchForm handleSubmitForm={handleSubmitForm} text={text} />
      </Results>
    </SHome>
  )
}

const ARTISTS_APOLLO_QUERY = gql`
  query Search($query: String!) {
    search {
      artists(query: $query, first: 40) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        nodes {
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
