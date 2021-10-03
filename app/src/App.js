import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from '@firebase/firestore';
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom';
import SignIn from './components/signIn';
import Main from './components/main';
import Header from './components/header';
import SignUp from './components/signUp';
import './components/styles/styles.css'
import { setCurrentUser } from './redux/user/user-actions';
import { connect } from 'react-redux';


function App(props) {

  let history = useHistory();

  // const [currentUser, setCurrentUser] = useState('')
  
  useEffect(() => {
    const {setCurrentUser} = props
    auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({id:snapShot.id, ...snapShot.data()})
          history.push('/')
        })
        // userRef.(snapShot => {
        //   console.log(snapShot)
        // })
      }
      // setCurrentUser(user)
      // createUserProfileDocument(user)
    })
  }, [])

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
        {/* <Header user={currentUser} signOut={() => signOut()} /> */}
        <Header />
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/sign" component={SignIn} ></Route>
        <Route exact path="/signup" component={SignUp}></Route>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
