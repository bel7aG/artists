import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SSearchField } from './SSearchField'

const SearchField = ({ name, value, className, disabled, search }) => {
  const searchInputRef = useRef(null)

  useEffect(() => {
    if (search) {
      // searchInputRef.current.autofocus = true
    } else {
      // searchInputRef.current.autofocus = false
    }
  }, [search])

  return (
    <SSearchField
      name={name}
      value={value}
      className={className}
      disabled={disabled}
      placeholder="search..."
      ref={searchInputRef}
    />
  )
}

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired
}

const mapStateToProps = ({ mechanism: { search } }) => ({
  search
})

export default connect(mapStateToProps)(SearchField)
