import React from 'react'
import logo from './logo.svg'
import './App.css'
import { hot } from 'react-hot-loader'
import { ConnectCounter } from './components/Counter'
import { Provider } from 'react-redux'
import { initStore } from './store'
import { createStore } from 'redux'
import { counter } from './store/reducers'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { About } from './components/pages/Home'
import { Home } from './components/pages/About'

const store = createStore(counter, { count: 1 })
console.log(store.getState())

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
              </ul>
            </nav>

            <ConnectCounter />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </Router>
      </div>
    </Provider>
  )
}

export default hot(module)(App)
