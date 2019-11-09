import React from 'react'
import PropTypes from 'prop-types'
import { EmptyBoxSVG } from 'components'
import { SEmpty } from './SEmpty'

const Empty = ({ message }) => (
  <SEmpty className="empty">
    <EmptyBoxSVG />
    <p>{message}</p>
  </SEmpty>
)

Empty.propTypes = {
  message: PropTypes.string.isRequired
}

export default Empty
