import { TOGGLE_SEARCH } from 'types'

export const toggleSearchAction = (toggle = false) => ({
  type: TOGGLE_SEARCH,
  toggle
})
