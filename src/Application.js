import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import client from 'apollo'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createStore, persistor } from 'store'
import 'styles/_index.scss'
export default ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={createStore}>
        <PersistGate persistor={persistor}>{element}</PersistGate>
      </Provider>
    </ApolloProvider>
  )
}
