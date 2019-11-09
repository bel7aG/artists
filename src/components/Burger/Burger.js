import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Mask } from 'components'
import { openMenuAnimation, closeMenuAnimation } from 'tweens'
import { SBurger } from './SBurger'

const Burger = ({
  menu,
  search,
  toggleMenuAction,
  toggleSearchAction,
  maskEveryThingRelatedToMenu,
  pathname,
  mask
}) => {
  useEffect(() => {
    toggleMenuAction(true)
  }, [])

  const handleMenu = () => {
    maskEveryThingRelatedToMenu()
    toggleMenuAction(menu)

    if (menu) {
      toggleSearchAction(false)
      closeMenuAnimation(pathname !== '/' || pathname === undefined)
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
  toggleSearchAction: PropTypes.func.isRequired,
  maskEveryThingRelatedToMenu: PropTypes.func.isRequired,
  mask: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
  menu: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired
}

export default Burger
