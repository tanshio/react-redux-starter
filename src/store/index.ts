import { applyMiddleware, compose, createStore } from 'redux'
import rootReducers, { reducers } from './root'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export type State = {
  [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

console.log(process.env.NODE_ENV, 'env')

export const initStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware: any[] = [routerMiddleware(history)]
  const enhancer = composeEnhancers(applyMiddleware(...middleware))

  return createStore(
    rootReducers(history),
    {
      counter: {
        count: 1,
      },
      todos: { todos: [{ title: 'test' }, { title: 'test2' }] },
    },
    enhancer
  )
}
