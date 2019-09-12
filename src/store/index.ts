import { rootReducers } from './reducers'
import { createStore } from 'redux'

export const initStore = () => {
  const store = createStore(rootReducers, {
    count: 1,
  })

  console.log(store.getState(), 'store')

  return store
}
