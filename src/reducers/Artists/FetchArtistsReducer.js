import { FETCH_ARTISTS } from 'types'

const INIT_STATE = {
  loading: false,
  artists: {
    nodes: [],
    pageInfo: {},
    totalCount: 0
  },
  error: null
}

export default (state = INIT_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_ARTISTS:
      const {
        loading,
        payload: { nodes, pageInfo, totalCount },
        error
      } = payload
      return {
        loading,
        artists: {
          nodes,
          pageInfo,
          totalCount
        },
        error
      }
    default:
      return state
  }
}
