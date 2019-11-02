import { ADD_FAVORIT, DELETE_FAVORIT } from 'types'

const INIT_STATE = []

export default (state = INIT_STATE, action) => {
  const { type, favorit } = action

  switch (type) {
    case ADD_FAVORIT:
      return [
        ...state,
        state.find(({ id }) => id === favorit.id) ? null : favorit
      ].filter(favorit => favorit)

    case DELETE_FAVORIT:
      return state.filter(({ id }) => id !== favorit.id)
    default:
      return state
  }
}
