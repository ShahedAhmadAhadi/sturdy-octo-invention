import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SignIn from './components/signIn';
import Main from './components/main';
import Header from './components/header';


function App() {

  const [currentUser, setCurrentUser] = useState('')


  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
      // setCurrentUser(user)
    })
  }, [currentUser])

  const signOut = () => {
    auth.signOut()
    setCurrentUser(null)
    console.log('signout')
  }

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
        <Header user={currentUser} signOut={() => signOut()} />
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/sign" component={SignIn} ></Route>
    </div>
  );
}

export default App;
