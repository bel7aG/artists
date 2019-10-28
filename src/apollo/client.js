import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjke2kn7p00ol01d2pinkptdj/master',
  fetch
})

export default client
