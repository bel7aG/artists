import React from 'react'
import PropTypes from 'prop-types'
import { SWrapper } from './SWrapper'

const Wrapper = ({ children, className = '', stylish = {} }) => (
  <SWrapper stylish={stylish} className={`wrapper ${className}`}>
    {children}
  </SWrapper>
)

Wrapper.protoType = {
  children: PropTypes.node,
  className: PropTypes.string,
  stylish: PropTypes.object
}

export default Wrapper
