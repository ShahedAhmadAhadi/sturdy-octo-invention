import React from 'react'
import './styles/header.css'
import { NavLink } from 'react-router-dom'
import { auth } from './../firebase/firebase.utils'

function Header(props) {

    console.log(props)
    
    return (
        <div className="wrapper">
            <h1 className="header">
            Logo
            </h1>
            <div className="list">
            <NavLink to="/" activeClassName="active-link" className="link">Home</NavLink>
            {props.isUser && <div to="/sign" activeClassName="active-link" className="link">Logout</div>}
            {!props.isUser && <NavLink to="/sign" activeClassName="active-link" className="link">signIn</NavLink>}
            <NavLink to="l" activeClassName="active-link"  className="link">Link</NavLink>
            </div>

        </div>
    )
}

export default Header
