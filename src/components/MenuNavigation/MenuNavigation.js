import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { Flex, List, FavoritSVG, Mask } from 'components'
import { handleArtistsTweens, handleHomeTweens } from 'tweens'

const MenuNavigation = ({
  menu,
  toggleMenuAction,
  toggleSearchAction,
  positionPlayerAction,
  maskEveryThingRelatedToMenu,
  mask
}) => {
  const handleMenuItem = position => {
    toggleMenuAction(menu)
    toggleSearchAction(false)
    maskEveryThingRelatedToMenu()
    positionPlayerAction(position)
  }

  return (
    <Flex
      className="menu-items-wrapper"
      direction="row"
      stylish={{ marginTop: '13%', height: '78%' }}
    >
      <Flex direction="row" stylish={{ height: '40rem', x: 'space-around' }}>
        <Flex stylish={{ x: 'flex-end', minWidth: '29%', maxWidth: '22rem' }}>
          <List className="menu-items__left">
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bel7aG.netlify.com"
              >
                Portfolio
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/bel7ag"
              >
                LinkedIn
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bel7aG"
              >
                Github
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/belhassengh"
              >
                Instagram
              </a>
            </span>
          </List>
        </Flex>
        <Flex stylish={{ marginTop: '0.7rem', maxWidth: '62.5%' }}>
          <List className="menu-items__right">
            <Mask mask={mask} />
            <h1
              onClick={() => {
                handleMenuItem('SLIDER')
                handleHomeTweens()
              }}
            >
              <Link to="/">Home</Link>
            </h1>
            <h1
              className="artists-favorit"
              onClick={() => {
                handleMenuItem('FAVORITS')
                handleArtistsTweens()
              }}
            >
              Artists
              <FavoritSVG
                stylish={{
                  width: '5rem',
                  height: '5rem',
                  marginLeft: '1rem'
                }}
              />
            </h1>
            <h1>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bel7aG.netlify.com"
              >
                Creator
              </a>
            </h1>
          </List>
        </Flex>
      </Flex>
    </Flex>
  )
}

MenuNavigation.propTypes = {
  toggleMenuAction: PropTypes.func.isRequired,
  toggleSearchAction: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
  maskEveryThingRelatedToMenu: PropTypes.func.isRequired,
  mask: PropTypes.bool.isRequired
}

export default MenuNavigation
