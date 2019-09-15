import { compose, createStore } from 'redux'
import rootReducers from './root'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

console.log(process.env.NODE_ENV, 'env')

export const initStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducers,
    {
      counter: {
        count: 1,
      },
    },
    composeEnhancers()
  )
}
