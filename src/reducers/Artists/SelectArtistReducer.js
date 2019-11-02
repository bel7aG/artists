import { SELECT_ARTIST } from 'types'

const INIT_STATE = null

export default (state = INIT_STATE, action) => {
  const { type, artist } = action

  switch (type) {
    case SELECT_ARTIST:
      return artist
    default:
      return state
  }
}
