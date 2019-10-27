import React from 'react'
import PropTypes from 'prop-types'
import { SMenu, SMenuLayer } from './SMenu'
import { Burger } from 'components'

const Menu = ({ children }) => {
  return (
    <SMenu className="menu">
      <Burger />
      <SMenuLayer className="menu-layer" />
      {children}
    </SMenu>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired
}

export default Menu
