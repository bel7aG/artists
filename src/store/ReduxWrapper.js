import React from 'react'
import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'reducers'

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    composeWithDevTools(/*applyMiddleware(...middleware)*/)
  )

export default ({ element }) => <Provider store={createStore()}>{element}</Provider>
