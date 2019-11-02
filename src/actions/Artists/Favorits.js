import { ADD_FAVORIT, DELETE_FAVORIT } from 'types'

export const addFavorit = (favorit = {}) => ({
  type: ADD_FAVORIT,
  favorit
})

export const deleteFavorit = (favorit = {}) => ({
  type: DELETE_FAVORIT,
  favorit
})
