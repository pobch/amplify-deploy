import React from 'react'
import logo from './logo.svg'
import './App.css'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Howdy, You</h1>
      </header>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(App, { includeGreetings: true })
