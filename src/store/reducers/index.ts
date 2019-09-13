import { Action } from '../actions/counter'
import { DECREMENT_COUNT, INCREMENT_COUNT } from '../actions/counter'

type State = {
  count: number
}

export const counter = (state: State = { count: 0 }, action: Action): State => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count + action.payload }
    case DECREMENT_COUNT:
      return { count: state.count - action.payload }
    default:
      return state
  }
}

console.log(counter)

// export const rootReducers = () => combineReducers({ ...count })
// export const rootReducers = () => combineReducers({ count })
export const rootReducers = () => counter
