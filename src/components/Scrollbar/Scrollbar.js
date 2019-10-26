import React from 'react'
import PropTypes from 'prop-types'
import { SScrollbar } from './SScrollbar'

const Scrollbar = ({ children }) => (
  <SScrollbar className="scrollbar">{children}</SScrollbar>
)

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Scrollbar
