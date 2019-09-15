import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { About } from '../components/pages/About'
import { CounterContainer } from '../containers/parts/Counter'

export const Pages = () => {
  return (
    <Router>
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
    </Router>
  )
}
