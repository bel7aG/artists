import React from 'react'
import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'reducers'
import { ApolloProvider } from '@apollo/react-hooks'
import client from 'apollo'

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    composeWithDevTools(/*applyMiddleware(...middleware)*/)
  )

export default ({ element }) => (
  <ApolloProvider client={client}>
    <Provider store={createStore()}>{element}</Provider>
  </ApolloProvider>
)
