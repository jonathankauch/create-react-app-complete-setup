import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers

const reducers = {
  routing: routerReducer,
}

const mainReducer = combineReducers(reducers)

export default mainReducer
