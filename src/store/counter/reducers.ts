import { CounterActionTypes } from './actions'
import { DECREMENT_COUNT, INCREMENT_COUNT } from './actions'

type State = {
  count: number
}

export const counter = (
  state: State = { count: 0 },
  action: CounterActionTypes
): State => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { count: state.count + action.payload }
    case DECREMENT_COUNT:
      return { count: state.count - action.payload }
    default:
      return state
  }
}
