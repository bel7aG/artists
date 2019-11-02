import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SMenu, SMenuLayer } from './SMenu'
import { Burger, MenuNavigation, Mask, SearchSVG } from 'components'
import { openSearchTweens } from 'tweens'
import { toggleMenuAction, toggleSearchAction } from 'actions'

const Menu = ({
  children,
  menu,
  search,
  toggleSearchAction,
  toggleMenuAction,
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
        menu={menu}
        search={search}
        toggleMenuAction={toggleMenuAction}
        toggleSearchAction={toggleSearchAction}
      />
      <div className="search-svg-box">
        <Mask mask={searchSVGMask} />
        <SearchSVG handleSearch={handleSearch} />
      </div>
      <SMenuLayer className="menu-layer" />
      <MenuNavigation
        menu={menu}
        toggleSearchAction={toggleSearchAction}
        toggleMenuAction={toggleMenuAction}
      />
      {children}
    </SMenu>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
  artistsLength: PropTypes.number.isRequired,
  toggleMenuAction: PropTypes.func.isRequired,
  toggleSearchAction: PropTypes.func.isRequired
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
  { toggleSearchAction, toggleMenuAction }
)(Menu)
