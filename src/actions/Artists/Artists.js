import { FETCH_ARTISTS } from 'types'

export const fecthArtists = ({ loading, artists, error }) => ({
  type: FETCH_ARTISTS,
  payload: {
    loading,
    artists,
    error
  }
})
