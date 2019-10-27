import { menu, search } from './Mechanism'

import { combineReducers } from 'redux'

const mechanism = combineReducers({
  menu,
  search
})

export default combineReducers({
  mechanism
})
