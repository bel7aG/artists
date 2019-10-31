import React from 'react'
import { Router, Location } from '@reach/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './Home'
import Details from './Details'
import Layout from 'components'
import NotFound from './404'
import './main.scss'

const App = () => (
  <Layout>
    <FadeTransitionRouter>
      <Home path="/" />
      <Details path="/details" />
      <NotFound default />
    </FadeTransitionRouter>
  </Layout>
)

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => {
      console.log(location)
      const { pathname } = location
      if (pathname === '/' || pathname === '/details') {
      } else {
      }

      return (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={2000}>
            {/* the only difference between a router animation and
                any other animation is that you have to pass the
                location to the router so the old screen renders
                the "old location" */}
            <Router location={location} className="router">
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )
    }}
  </Location>
)

export default App
