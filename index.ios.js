import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import App from './src/common/App'

import { createStore } from 'redux'
import rootReducer from './src/common/reducers'


function configureStore() {
  let store = createStore(rootReducer)
  return store
}


const store = configureStore()

const RApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('App', () => RApp);
