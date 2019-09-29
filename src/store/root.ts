import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { counter } from './counter/reducers'
import { todos } from './todos/reducers'
// Do not DELETE hygen import

export const reducers = {
  counter,
  todos,
} // Do not DELETE hygen reducer

export const rootReducers = (history: History) =>
  combineReducers({ ...reducers, router: connectRouter(history) })

export default rootReducers
