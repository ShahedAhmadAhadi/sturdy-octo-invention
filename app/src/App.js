import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument, getUsers, db } from './firebase/firebase.utils';
import { onSnapshot } from '@firebase/firestore';
import { Route, Switch, BrowserRouter, useHistory, Redirect } from 'react-router-dom';
import SignIn from './components/signIn';
import Main from './components/main';
import Header from './components/header';
import SignUp from './components/signUp';
import './components/styles/styles.css'
import { setCurrentUser } from './redux/user/user-actions';
import { connect, useSelector } from 'react-redux';
import { setDropdownToggle, dropdownToggle} from './redux/dropdown/func-dropdown';


function App(props) {

  let history = useHistory();
  const dropdown = useSelector(dropdownToggle)

  async function users(db) {
   const a = await getUsers(db)
   return a
  }

  const a = users(db)
  // console.log(a, 'asldjiiii')

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
    <div className="App" >
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
        <Header onClick={() => setDropdownToggle(false)} />
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/sign" component={SignIn} ></Route>
        <Route exact path="/signup" render={() => {props.currentUser ? (<Redirect to="/" />) : (<SignUp />)}}></Route>
    </div>
  );
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
