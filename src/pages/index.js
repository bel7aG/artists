import React from 'react'
import { Router, Location } from '@reach/router'

import Layout from 'components'

import Home from './Home'
import Details from './Details'
import NotFound from './404'

const App = () => {
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
}
const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => {
      const { pathname } = location
      if (pathname === '/' || pathname === '/details') {
      } else {
      }

      return <Router>{props.children}</Router>
    }}
  </Location>
)

export default App
