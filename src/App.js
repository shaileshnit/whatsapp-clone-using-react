import React, { useState, useEffect } from 'react'
import './App.css'
import Chat from './Components/Chat'
import Sidebar from './Components/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from './Components/Login'
import { useStateValue } from './Components/StateProvider'

function App() {
  // pull the user from data layer
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='app'>
      {!user ? (
        <>
          <Router>
            <Redirect to='/login' />
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
            </Switch>
          </Router>
        </>
      ) : (
        <div className='app__body'>
          <Router>
            <Redirect to='/' />
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId' exact>
                <Chat />
              </Route>
              <Route path='/' exact>
                {/* <Chat /> */}
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  )
}

export default App
