import React from 'react'
import PropTypes from 'prop-types'
import { SEmpty } from './SEmpty'
import { EmptyBoxSVG } from 'components'
const Empty = ({ message }) => (
  <SEmpty>
    <EmptyBoxSVG />
    <p>{message}</p>
  </SEmpty>
)

Empty.propTypes = {
  message: PropTypes.string.isRequired
}

export default Empty
