import { TOGGLE_SEARCH } from 'types'

const INIT_STATE = false

export default (state = INIT_STATE, action = {}) => {
  const { type, toggle } = action
  switch (type) {
    case TOGGLE_SEARCH:
      return toggle
    default:
      return state
  }
}
