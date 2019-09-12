import React from 'react'
import logo from './logo.svg'
import './App.css'
import { hot } from 'react-hot-loader'
import { ConnectCounter } from './components/Counter'
import { Provider } from 'react-redux'
import { initStore } from './store'
import { createStore } from 'redux'
import { counter } from './store/reducers'

const store = createStore(counter, { count: 1 })
console.log(store.getState())

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Provider store={store}>
          <ConnectCounter />
        </Provider>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default hot(module)(App)
