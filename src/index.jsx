import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import reducers from './reducers/index'
import DevTools from './components/DevTools'
import './styles/index.css'

const store = createStore(reducers, {}, compose(applyMiddleware(), DevTools.instrument()))

const rootEl = document.getElementById('root')
render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(
      <Provider store={store}>
        <AppContainer>
           <NextApp />
        </AppContainer>
      </Provider>,
      rootEl
    )
  })
  module.hot.accept('./reducers/index', () => {
    store.replaceReducer(require('./reducers/index').default)
  })
  module.hot.accept('./actions/index', () => {
    store.replaceReducer(require('./actions/index').default)
  })
}
