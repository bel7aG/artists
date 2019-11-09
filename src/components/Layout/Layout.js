import React from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { Favorits, Slider, Menu, Layer } from 'components'

const Layout = ({ children }) => (
  <Location>
    {({ location: { pathname } }) => {
      return (
        <>
          <Menu pathname={pathname}>{children}</Menu>
          <Layer />
          <Slider className="scrollbar" />
          <Favorits />
        </>
      )
    }}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
