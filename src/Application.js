import React from 'react'

import { ApolloProvider } from '@apollo/react-hooks'
import client from 'apollo'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createStore, persistor } from 'store'

export default ({ element }) => {
  console.log(element)
  return (
    <ApolloProvider client={client}>
      <Provider store={createStore}>
        <PersistGate persistor={persistor}>{element}</PersistGate>
      </Provider>
    </ApolloProvider>
  )
}
