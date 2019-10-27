import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SMenu, SMenuLayer } from './SMenu'
import { Burger, SearchSVG } from 'components'
import { openSearchTweens, closeSearchTweens } from 'tweens'
import { toggleSearchAction } from 'actions'

const Menu = ({ children, search, toggleSearchAction }) => {
  const handleSearch = () => {
    if (!search) {
      console.log(search)
      toggleSearchAction(true)
      openSearchTweens()
    } else {
    }
  }
  console.log(search)

  return (
    <SMenu className="menu">
      <Burger />
      <SearchSVG handleSearch={handleSearch} />
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