import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { openMenuAnimation, closeMenuAnimation } from 'tweens'
import { SBurger } from './SBurger'
import { Mask } from 'components'
import { toggleMenuAction, toggleSearchAction } from 'actions'

const Burger = ({ menu, search, toggleMenuAction, toggleSearchAction }) => {
  const [mask, setMask] = useState(false)

  useEffect(() => {
    toggleMenuAction(true)
  }, [])

  const handleMenu = () => {
    setMask(true)

    setTimeout(() => {
      setMask(false)
    }, 5000)

    toggleMenuAction(menu)

    if (menu) {
      toggleSearchAction(false)
      closeMenuAnimation()
    } else {
      openMenuAnimation(search)
    }
  }

  return (
    <SBurger className="menu-burger">
      <Mask mask={mask} />
      <div onClick={handleMenu}>
        <span className="menu-burger__item menu-burger__item-1" />
        <span className="menu-burger__item menu-burger__item-2" />
        <span className="menu-burger__item menu-burger__item-3" />
      </div>
    </SBurger>
  )
}

Burger.propTypes = {
  toggleMenuAction: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired
}

const mapStateToProps = ({ mechanism: { menu, search } }) => ({
  menu,
  search
})

export default connect(
  mapStateToProps,
  { toggleMenuAction, toggleSearchAction }
)(Burger)
