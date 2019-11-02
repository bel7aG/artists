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

const SearchForm = ({ handleSubmit, handleSubmitForm, text, disabled }) => {
  return (
    <SSearchForm onSubmit={handleSubmit(handleSubmitForm)}>
      <Field
        disabled={disabled}
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
  handleSubmitForm: PropTypes.func.isRequired,
  fecthArtists: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default connect(
  null,
  { fecthArtists }
)(
  reduxForm({
    form: 'artistForm'
  })(SearchForm)
)
