import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { counter } from './counter/reducers'

const reducers = {
  counter,
}

export const rootReducers = (history: History) =>
  combineReducers({ ...reducers, router: connectRouter(history) })

export default rootReducers
