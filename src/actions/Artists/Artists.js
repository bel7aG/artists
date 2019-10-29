import { FETCH_ARTISTS } from 'types'

export const fecthArtists = (payload = {}) => ({
  type: FETCH_ARTISTS,
  payload
})
