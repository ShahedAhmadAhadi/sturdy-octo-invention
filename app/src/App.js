import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import auth from './firebase/firebase.utils';
import { Router } from 'react-router-dom';
import signIn from './components/signIn'

function App() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    auth.OnAuthStateChanged(user => {setCurrentUser(user)})
    console.log(user)
    return () => {}
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
      <signIn />
    </div>
  );
}

export default App;
