import { hot } from 'react-hot-loader/root'
import React from 'react'

import { Pages } from './routes'
import { CounterContainer } from './containers/parts/Counter'
import { TodoContainer } from './containers/parts/Todos'

const App: React.FC = () => {
  return (
    <div className="App">
      <CounterContainer />
      <TodoContainer />
      <Pages />
    </div>
  )
}

export default hot(App)
