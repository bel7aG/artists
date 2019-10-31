import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from '@reach/router'

import { Scrollbar, SearchForm, Slider, Menu, Layer, Flex, List } from 'components'
import { closeMenuAnimation, handleArtistsTweens, handleHomeTweens } from 'tweens'
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

  const handleMenuLink = () => {
    closeMenuAnimation()
  }

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
                <span>
                  <a target="_blank" href="https://instagram.com/belhassengh">
                    Instagram
                  </a>
                </span>
                <span>
                  <a target="_blank" href="https://instagram.com/belhassengh">
                    Facebook
                  </a>
                </span>
                <span>
                  <a target="_blank" href="https://instagram.com/belhassengh">
                    Github
                  </a>
                </span>
              </List>
            </Flex>
            <Flex stylish={{ marginTop: '0.7rem', maxWidth: '62.5%' }}>
              <List className="menu-items__right">
                <h1 onClick={handleHomeTweens}>
                  <Link to="/">Home</Link>
                </h1>
                <h1 onClick={handleArtistsTweens}>
                  <Link to="/artists">Artists</Link>
                </h1>
                <h1 onClick={handleMenuLink}>
                  <Link to="/">Contact</Link>
                </h1>
              </List>
            </Flex>
          </Flex>
        </Flex>

        <Scrollbar>
          <SearchForm />
          {children}
        </Scrollbar>
      </Menu>
      <Layer />
      <Slider />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  renderSlider: PropTypes.bool
}

export default Layout
