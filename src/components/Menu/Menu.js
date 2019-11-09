import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleMenuAction, toggleSearchAction, positionPlayerAction } from 'actions'
import { Burger, MenuNavigation, Mask, SearchSVG } from 'components'
import { openSearchTweens } from 'tweens'
import { SMenu, SMenuLayer, SSearchBox } from './SMenu'

const Menu = ({
  children,
  menu,
  search,
  toggleSearchAction,
  toggleMenuAction,
  positionPlayerAction,
  pathname,
  artistsLength
}) => {
  const [searchSVGMask, setSearchSVGMask] = useState(false)
  const [mask, setMask] = useState(false)

  const handleSearch = () => {
    toggleSearchAction(true)
    openSearchTweens(artistsLength)
  }

  const maskEveryThingRelatedToMenu = () => {
    setMask(true)

    setTimeout(() => {
      setMask(false)
    }, 4100)
  }

  useEffect(() => {
    toggleSearchAction(false)
  }, [])

  useEffect(() => {
    if (search) {
      maskEveryThingRelatedToMenu()
      setSearchSVGMask(true)
    } else {
      setSearchSVGMask(false)
    }
  }, [search])

  return (
    <SMenu className="menu">
      {pathname === '/' && (
        <>
          <Burger
            maskEveryThingRelatedToMenu={maskEveryThingRelatedToMenu}
            mask={mask}
            pathname={pathname}
            menu={menu}
            search={search}
            toggleMenuAction={toggleMenuAction}
            toggleSearchAction={toggleSearchAction}
          />
          <SSearchBox className="search-svg-box">
            <Mask mask={searchSVGMask || mask} />
            <SearchSVG handleSearch={handleSearch} />
          </SSearchBox>
          <SMenuLayer className="menu-layer" />
          <MenuNavigation
            maskEveryThingRelatedToMenu={maskEveryThingRelatedToMenu}
            mask={mask}
            menu={menu}
            toggleSearchAction={toggleSearchAction}
            toggleMenuAction={toggleMenuAction}
            positionPlayerAction={positionPlayerAction}
          />
        </>
      )}
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
  artistsLength: PropTypes.number.isRequired
}

const mapStateToProps = ({
  mechanism: { menu, search },
  data: {
    artists: {
      artists: { nodes: artists }
    }
  }
}) => ({
  menu,
  search,
  artistsLength: artists.length
})

export default connect(
  mapStateToProps,
  { toggleSearchAction, toggleMenuAction, positionPlayerAction }
)(Menu)
