import { Action } from '../actions/types'
import { combineReducers } from 'redux'

type State = {
  count: number
}

export const counter = (state: State = { count: 0 }, action: Action): State => {
  console.log(state, 'action')
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      // 主題とはずれるが戻り値のStateを省略するとこの余計な`hoge`プロパティを検知できない。
      // reduxのReducer型を使っても同じように検知されないので注意
      // return { count: state.count - action.payload, hoge: 1 }
      return { count: state.count - action.payload }
    // Type Error...
    // case 'typo':
    //   return { count: action.payload }
    default:
      return { count: state.count + 2 }
  }
}

console.log(counter)

// export const rootReducers = () => combineReducers({ ...count })
// export const rootReducers = () => combineReducers({ count })
export const rootReducers = () => counter
