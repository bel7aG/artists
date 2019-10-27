import { TOGGLE_MENU } from 'types'

const INIT_STATE = false

export default (state = INIT_STATE, action = {}) => {
  const { type, toggle } = action

  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        toggle: !toggle
      }
    default:
      return state
  }
}
