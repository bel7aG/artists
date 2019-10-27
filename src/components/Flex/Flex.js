import React from 'react'
import PropTypes from 'prop-types'
import { FlexRow, FlexColumn } from './SFlex'

const Flex = ({ children, direction, stylish, className = '' }) =>
  direction === 'row' ? (
    <FlexRow className={className} stylish={stylish}>
      {children}
    </FlexRow>
  ) : (
    <FlexColumn className={className} stylish={stylish}>
      {children}
    </FlexColumn>
  )

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.string,
  stylish: PropTypes.object
}

export default Flex
