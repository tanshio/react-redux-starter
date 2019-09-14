import { compose, createStore } from 'redux'
import rootReducers from './root'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export const initStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducers,
    {
      counter: {
        count: 1,
      },
    },
    composeEnhancers()
  )

  if (module.hot) {
    console.log('hot')
    module.hot.accept('./root', () => {
      console.log('accept')
      store.replaceReducer(
        require('./root').default /*.default if you use Babel 6+ */
      )
    })
  }

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
