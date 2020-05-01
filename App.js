import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { Alert } from './components/alert'
import AppContainer from './routers'

export default function App() {
  return (
    <Provider store={store}>
      <Alert />
      <AppContainer />
    </Provider>
  )
}
