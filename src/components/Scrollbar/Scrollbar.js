import React from 'react'
import PropTypes from 'prop-types'
import { SScrollbar } from './SScrollbar'

const Scrollbar = ({ children, className = '' }) => (
  <SScrollbar className={className}>{children}</SScrollbar>
)

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node
}

export default Scrollbar
