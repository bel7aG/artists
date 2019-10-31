import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { menu, search, appStarted } from './Mechanism'
import { artists } from './Artists'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['data']
}

const mechanism = combineReducers({
  menu,
  search,
  appStarted
})

const data = combineReducers({
  artists
})

const rootReducer = combineReducers({
  mechanism,
  form,
  data
})

export default persistReducer(persistConfig, rootReducer)
