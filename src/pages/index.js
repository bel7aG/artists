import React from 'react'
import { Router, Location } from '@reach/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Layout from 'components'

import Home from './Home'
import Details from './Details'
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
      const { pathname } = location
      if (pathname === '/' || pathname === '/details') {
      } else {
      }

      return (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500}>
            <Router>{props.children}</Router>
          </CSSTransition>
        </TransitionGroup>
      )
    }}
  </Location>
)

export default App
