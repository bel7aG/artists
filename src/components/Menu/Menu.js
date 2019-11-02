import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SMenu, SMenuLayer } from './SMenu'
import { Burger, MenuNavigation, Mask, SearchSVG } from 'components'
import { openSearchTweens } from 'tweens'
import { toggleMenuAction, toggleSearchAction, positionPlayerAction } from 'actions'

const Menu = ({
  children,
  menu,
  search,
  toggleSearchAction,
  toggleMenuAction,
  positionPlayerAction,
  positionPlayer,
  pathname,
  artistsLength
}) => {
  const [searchSVGMask, setSearchSVGMask] = useState(false)

  const handleSearch = () => {
    toggleSearchAction(true)
    openSearchTweens(artistsLength)
  }

  useEffect(() => {
    toggleSearchAction(false)
  }, [])

  useEffect(() => {
    if (search) {
      setSearchSVGMask(true)
    } else {
      setSearchSVGMask(false)
    }
  }, [search])

  return (
    <SMenu className="menu">
      <Burger
        pathname={pathname}
        menu={menu}
        search={search}
        toggleMenuAction={toggleMenuAction}
        toggleSearchAction={toggleSearchAction}
      />
      <div className="search-svg-box">
        {pathname === '/' && (
          <>
            <Mask mask={searchSVGMask} />
            <SearchSVG handleSearch={handleSearch} />
          </>
        )}
      </div>
      <SMenuLayer className="menu-layer" />
      <MenuNavigation
        menu={menu}
        toggleSearchAction={toggleSearchAction}
        toggleMenuAction={toggleMenuAction}
        positionPlayerAction={positionPlayerAction}
      />
      {children}
    </SMenu>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
  toggleMenuAction: PropTypes.func.isRequired,
  toggleSearchAction: PropTypes.func.isRequired,
  positionPlayerAction: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  positionPlayer: PropTypes.string.isRequired,
  artistsLength: PropTypes.number.isRequired
}

const mapStateToProps = ({
  mechanism: { menu, search, positionPlayer },
  data: {
    artists: {
      artists: { nodes: artists }
    }
  }
}) => ({
  menu,
  search,
  positionPlayer,
  artistsLength: artists.length
})

export default connect(
  mapStateToProps,
  { toggleSearchAction, toggleMenuAction, positionPlayerAction }
)(Menu)
