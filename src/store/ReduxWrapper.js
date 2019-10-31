import { createStore as reduxCreateStore, applyMiddleware } from 'redux'

import { persistStore } from 'redux-persist'

import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'reducers'

export const createStore = reduxCreateStore(
  rootReducer,
  composeWithDevTools(/*applyMiddleware(...middleware)*/)
)

export const persistor = persistStore(createStore)
