import { APP_STARTED } from 'types'

const INIT_STATE = false

export default (state = INIT_STATE, action) => {
  const { type, isFirstLoad } = action

  switch (type) {
    case APP_STARTED:
      return isFirstLoad

    default:
      return state
  }
}
