import React from 'react'
import Proptypes from 'prop-types'
import SContainer from './SContainer'

const Container = ({ children, className }) => (
  <SContainer className={className}>{children}</SContainer>
)

Container.proptypes = {
  children: Proptypes.node,
  className: Proptypes.string
}

export default Container
