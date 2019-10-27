import React from 'react'
import PropTypes from 'prop-types'
import { SForm } from './SForm'

const Form = ({ children, handleSubmit }) => {
  return <SForm onSubmit={handleSubmit}>{children}</SForm>
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Form
