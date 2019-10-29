import React, { useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { SSearchForm } from './SSearchForm'
import { SearchField as renderSearchField } from 'components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

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

const SearchForm = ({ handleSubmit, ...props }) => {
  const [text, setText] = useState('')

  const { loading, error, data } = useQuery(ARTISTS_APOLLO_QUERY, {
    skip: !text || !/^[a-z][a-z]*$/.test(text) || loading,
    variables: {
      query: text
    }
  })

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
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'artistForm' // a unique identifier for this form
  // asyncValidate,
  // asyncChangeFields: ['username']
})(SearchForm)
