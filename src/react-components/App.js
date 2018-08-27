import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'simpler-redux'
import Main from './Main'

let store = createStore(
  undefined,
  undefined,
  {useDefaultMSTPCacheOnlyLogging: false}
)

export default () =>
  <Provider store={store}>
    <Main />
  </Provider>
