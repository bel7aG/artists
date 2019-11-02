import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'

import { Scrollbar, Favorits, Slider, Menu, Layer, Flex, List } from 'components'
import './Layout.scss'

const Layout = ({ children, renderSlider = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log('aaaaaaaaaaaannnnnnnnnnnaaaaaaaamiiiiiiiiiii')
  console.log(children)

  return (
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
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  renderSlider: PropTypes.bool
}

export default Layout
