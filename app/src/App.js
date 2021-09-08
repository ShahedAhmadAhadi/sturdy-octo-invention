import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { auth } from './firebase/firebase.utils';
import { Router } from 'react-router-dom';
import SignIn from './components/signIn'

function App() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged(user => {setCurrentUser(user)
    console.log(user)})
  }, [])

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SignIn />
    </div>
  );
}

export default App;
