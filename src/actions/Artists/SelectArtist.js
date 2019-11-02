import { SELECT_ARTIST } from 'types'

export const selectArtist = (artist = {}) => ({
  type: SELECT_ARTIST,
  artist
})
