import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SMenu, SMenuLayer } from './SMenu'
import { Burger, Mask, SearchSVG } from 'components'
import { openSearchTweens } from 'tweens'
import { toggleSearchAction } from 'actions'

const Menu = ({ children, search, toggleSearchAction = false }) => {
  const [searchSVGMask, setSearchSVGMask] = useState(false)

  const handleSearch = () => {
    toggleSearchAction(true)
    openSearchTweens(search)
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
      <Burger />
      <div className="search-svg-box">
        <Mask mask={searchSVGMask} />
        <SearchSVG handleSearch={handleSearch} />
      </div>
      <SMenuLayer className="menu-layer" />
      {children}
    </SMenu>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  search: PropTypes.bool.isRequired,
  toggleSearchAction: PropTypes.func.isRequired
}

const mapStateToProps = ({ mechanism: { search } }) => ({
  search
})

export default connect(
  mapStateToProps,
  { toggleSearchAction }
)(Menu)
