import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: 'https://graphbrainz.herokuapp.com',
  fetch
})

export default client
