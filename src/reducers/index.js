import { reducer as form } from 'redux-form'
import { menu, search } from './Mechanism'
import { artists } from './Artists'

import { combineReducers } from 'redux'

const mechanism = combineReducers({
  menu,
  search
})

const data = combineReducers({
  artists
})

export default combineReducers({
  mechanism,
  form,
  data
})
