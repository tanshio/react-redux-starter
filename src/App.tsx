import { hot } from 'react-hot-loader/root'
import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { initStore } from './store'
import { Pages } from './routes'
import { ConnectCounter } from './components/Counter'

const App: React.FC = () => {
  return (
    <Provider store={initStore()}>
      <div className="App">
        <ConnectCounter />
        {/*<Pages />*/}
      </div>
    </Provider>
  )
}

export default hot(App)
