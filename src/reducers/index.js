import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { menu, search, positionPlayer } from './Mechanism'
import { artists, favorits, pickedArtist } from './Artists'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorits']
}

const mechanism = combineReducers({
  menu,
  search,
  positionPlayer
})

const data = combineReducers({
  artists,
  pickedArtist
})

const rootReducer = combineReducers({
  mechanism,
  form,
  data,
  favorits
})

export default persistReducer(persistConfig, rootReducer)
