import { counter } from './counter/reducers'
import { createStore } from 'redux'

export const initStore = () => {
  const store = createStore(counter, {
    count: 1,
  })

  console.log(store.getState(), 'store')
  console.log(module, 'module')

  // const h: any = module
  //
  // if (process.env.NODE_ENV !== 'production' && h.hot) {
  //   h.accept('./counter/reducers', () => store.replaceReducer(counter))
  // }

  return store
}

// export const rootReducers = () => combineReducers({ ...count })
// export const rootReducers = () => combineReducers({ count })
export const rootReducers = () => counter
