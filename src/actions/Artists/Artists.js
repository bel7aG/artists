import { FETCH_ARTISTS } from 'types'

export const fecthArtists = ({ loading, payload, error }) => ({
  type: FETCH_ARTISTS,
  payload: {
    loading,
    payload,
    error
  }
})
