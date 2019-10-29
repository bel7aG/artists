import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SSearchField } from './SSearchField'
import { red } from 'ansi-colors'

const SearchField = ({
  input,
  disabled = false,
  className = 'search-input',
  type = 'text',
  label = 'search...',
  search
}) => {
  const searchInputRef = useRef(null)

  useEffect(() => {
    if (search) {
      searchInputRef.current.autofocus = true
    } else {
      searchInputRef.current.autofocus = false
    }
  }, [search])

  return (
    <SSearchField
      stylish={disabled && { color: 'red', borderColor: 'red' }}
      {...input}
      disabled={disabled}
      className={className}
      type={type}
      placeholder={label}
      ref={searchInputRef}
    />
  )
}

SearchField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired
}

const mapStateToProps = ({ mechanism: { search } }) => ({
  search
})

export default connect(mapStateToProps)(SearchField)
