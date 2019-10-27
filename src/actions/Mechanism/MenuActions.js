import { TOGGLE_MENU } from 'types'

export const toggleMenuAction = (toggle = false) => ({
  type: TOGGLE_MENU,
  toggle
})
