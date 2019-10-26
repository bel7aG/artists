import React, { useState } from 'react'
import { openMenuAnimation, closeMenuAnimation } from 'tweens'
import { SBurger } from './SBurger'
import { Mask } from 'components'

const Burger = () => {
  const [menuState, setMenuState] = useState(false)
  const [mask, setMask] = useState(false)

  const handleMenu = () => {
    setMask(true)

    setTimeout(() => {
      setMask(false)
    }, 5000)

    if (menuState) {
      setMenuState(false)
      closeMenuAnimation()
    } else {
      setMenuState(true)
      openMenuAnimation()
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

export default Burger
