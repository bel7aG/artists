import { POSITION_PLAYER } from 'types'

const INIT_STATE = 'SLIDER'

export default (state = INIT_STATE, action = {}) => {
  const { type, position } = action
  switch (type) {
    case POSITION_PLAYER:
      return position
    default:
      return state
  }
}
