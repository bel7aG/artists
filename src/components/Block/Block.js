import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ className, children }) => (
  <div className={className}>{children}</div>
)

Block.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Block
