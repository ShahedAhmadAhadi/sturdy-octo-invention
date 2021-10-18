import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument, getUsers, db } from './firebase/firebase.utils';
import { increment, onSnapshot } from '@firebase/firestore';
import { Route, Switch, BrowserRouter, useHistory, Redirect } from 'react-router-dom';
import SignIn from './components/signIn';
import Main from './components/main';
import Header from './components/header';
import SignUp from './components/signUp';
import './components/styles/styles.css'
import { setCurrentUser } from './redux/user/user-actions';
import { user } from './redux/user/user-reducer';
import { connect, useSelector, useDispatch } from 'react-redux';
import { setDropdownToggle, dropdownToggle} from './redux/dropdown/func-dropdown';

function App(props) {
  const dispatch = useDispatch()
  const cuser = useSelector(user)
  console.log(cuser, 'cuser')

  let history = useHistory();

  async function users(db) {
   const a = await getUsers(db)
   return a
  }
  

  const a = users(db)
  // console.log(a, 'asldjiiii')

  // const [currentUser, setCurrentUser] = useState('')
  
  useEffect(() => {
    // const {setCurrentUser} = props
    auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapShot) => {
          props.setCurrentUser({id:snapShot.id, ...snapShot.data()})
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
  // useEffect(() => {
  //   const dropdown = useSelector(dropdownToggle)
  //   console.log(dropdown, 'global')
  //   if (dropdown) {
  //     window.addEventListener('click', () => {dispatch(setDropdownToggle(false)); console.log('object')});
  //   }
  // }, [])


  // const dropdown = useSelector(dropdownToggle)
  // console.log(dropdown, 'global')
  // if (props.dropdown) {
  //   window.addEventListener('click', () => {
  //     dispatch(setDropdownToggle(false)); console.log(props.dropdown)
  //   })
  // }

  // function handleFalseDropdown (dropdown) {
  //   if (dropdown) {
  //     console.log(dropdown)
  //     dispatch(setDropdownToggle(false)); console.log('props');
  //   }
  // }
  // window.addEventListener('click', handleFalseDropdown(props.dropdown))
  window.addEventListener('click', () => modifyText(props.dropdown))
  function modifyText(dropdown) {
    let drop = props.dropdown
    if (drop) {
      dispatch(setDropdownToggle(false));
      console.log(props);
    }
    // if (t2.firstChild.nodeValue == "three") {
    //   t2.firstChild.nodeValue = "two";
    // } else {
    //   t2.firstChild.nodeValue = "three";
    //   controller.abort(); // remove listener after value reaches "three"
    // }
  }
  // window.addEventListener('click', function (props) {
  //   if (props.dropdown) {
  //     console.log(props.dropdown)
  //     dispatch(setDropdownToggle(false)); console.log('props');
  //   }
  //   },);
  
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
        <Header />
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/sign" component={SignIn} ></Route>
        <Route exact path="/signup" render={() => {props.currentUser ? (<Redirect to="/" />) : (<SignUp />)}}></Route>
    </div>
  );
}

const mapStateToProps = ({user, dropdown}) => ({
  currentUser: user.currentUser,
  dropdown: dropdown.drop
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
