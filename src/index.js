import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { syncHistoryWithStore } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker'
import mainReducer from './combineReducers'
import App from './App'

// Redux Store
/* eslint-disable-next-line */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)

// Mount app
export const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/test" render={() => <p>Test router</p>} />
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
