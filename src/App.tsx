import { hot } from 'react-hot-loader/root'
import React from 'react'
import './App.css'

import { Pages } from './routes'
import { CounterContainer } from './containers/parts/Counter'

const App: React.FC = () => {
  return (
    <div className="App">
      <CounterContainer />
      <Pages />
    </div>
  )
}

export default hot(App)
