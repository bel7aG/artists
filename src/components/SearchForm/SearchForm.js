import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { SSearchForm } from './SSearchForm'
import { SearchField as renderSearchField } from 'components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { fecthArtists } from 'actions'
import { load, unload } from 'tweens'

const ARTISTS_APOLLO_QUERY = gql`
  query Search($query: String!) {
    search {
      artists(query: $query, first: 10) {
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
        }
      }
    }
  }
`

const SearchForm = ({ handleSubmit, fecthArtists }) => {
  const [text, setText] = useState('')
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const { loading, error = null, data } = useQuery(ARTISTS_APOLLO_QUERY, {
    skip: !text || !/^[a-zA-Z]*$/.test(text) || loading,
    variables: {
      query: text
    }
  })

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false)
    }
  }, [isFirstLoad])

  useEffect(() => {
    if (data) {
      if (data.search.artists.nodes.length) {
        if (loading) {
          load(12)
        } else {
          unload()
        }
      } else {
        if (loading) {
          load(2)
        }
      }
      fecthArtists({ loading, error, artists: data.search.artists.nodes })
    } else if (!isFirstLoad) {
      if (loading) {
        load(12)
      } else {
        unload()
      }
    }
  }, [loading])

  const handleSubmitForm = ({ searchField }) => {
    setText(searchField)
  }

  return (
    <SSearchForm onSubmit={handleSubmit(handleSubmitForm)}>
      <Field
        disabled={loading}
        name="searchField"
        type="text"
        value={text}
        component={renderSearchField}
        label="search..."
      />
    </SSearchForm>
  )
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fecthArtists: PropTypes.func.isRequired
}

export default connect(
  null,
  { fecthArtists }
)(
  reduxForm({
    form: 'artistForm' // a unique identifier for this form
    // asyncValidate,
    // asyncChangeFields: ['username']
  })(SearchForm)
)
