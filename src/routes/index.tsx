import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { About } from '../components/pages/About'
import { CounterContainer } from '../containers/parts/Counter'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store'

export const Pages = () => {
  return (
    <ConnectedRouter history={history}>
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
      <CounterContainer />
      <CounterContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </ConnectedRouter>
  )
}
