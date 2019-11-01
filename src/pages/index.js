import React, { useState, useEffect } from 'react'
import { Router, Location, Redirect } from '@reach/router'

import Home from './Home'
import Details from './Details'
import Layout from 'components'
import NotFound from './404'
import './main.scss'

const App = () => {
  return (
    <Location>
      {({ location }) => {
        return (
          <Layout>
            <span />
            <FadeTransitionRouter>
              <Home path="/" />
              <Details path="/artist/:name/details" />
              <NotFound default />
            </FadeTransitionRouter>
          </Layout>
        )
      }}
    </Location>
  )
}
const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => {
      console.log(location)
      const { pathname } = location
      if (pathname === '/' || pathname === '/details') {
      } else {
      }

      return <Router>{props.children}</Router>
    }}
  </Location>
)

export default App
