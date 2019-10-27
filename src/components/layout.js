import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import './layout.css'

import { Scrollbar, Wrapper, Layer, Slider, Menu, Flex, List } from 'components'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Menu>
        <Flex
          className="menu-items-wrapper"
          direction="row"
          stylish={{ marginTop: '13%', height: '78%' }}
        >
          <Flex direction="row" stylish={{ height: '40rem', x: 'space-around' }}>
            <Flex stylish={{ x: 'flex-end', minWidth: '29%', maxWidth: '22rem' }}>
              <List className="menu-items__left">
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Wiki</span>
              </List>
            </Flex>
            <Flex stylish={{ maxWidth: '62.5%' }}>
              <List className="menu-items__right">
                <h1>Home</h1>
                <h1>Artists</h1>
                <h1>Contact</h1>
              </List>
            </Flex>
          </Flex>
        </Flex>
        <Scrollbar>{children}</Scrollbar>
      </Menu>
      <Layer />
      <Slider />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
