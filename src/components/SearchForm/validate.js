const validate = values => {
  const { searchField } = values
  const errors = {}
  if (searchField) {
    errors.searchField = 'Required'
  }

  if (searchField && !/^[a-z][a-z\s]*$/.test(searchField)) {
    searchField = searchField.replace(/[^A-Za-z]/gi, '')
    errors.searchField = 'Invalid email address'
  }

  return errors
}

export default validate
