import produce from 'immer'
import { CounterActionTypes } from './actions'
import { DECREMENT_COUNT, INCREMENT_COUNT } from './actions'

type State = {
  count: number
}

export const counter = produce(
  (draft: State = { count: 0 }, action: CounterActionTypes): State => {
    switch (action.type) {
      case INCREMENT_COUNT:
        draft.count = draft.count + action.payload
        return draft
      case DECREMENT_COUNT:
        draft.count = draft.count - action.payload
        return draft
      default:
        return draft
    }
  }
)
