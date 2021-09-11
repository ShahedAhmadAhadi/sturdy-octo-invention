import React from 'react'
import './styles/header.css'
import { NavLink } from 'react-router-dom'

function Header(props) {

    console.log(props)
    
    return (
        <div className="wrapper">
            <h1 className="header">
            Logo
            </h1>
            <div className="list">
            <NavLink to="/" activeClassName="active-link" className="link">Home</NavLink>
            <NavLink to="l" activeClassName="active-link"  className="link">Link</NavLink>
            {props.isUser && <a className="link" onClick={() => props.signOut()}>SignOut</a>}
            {!props.isUser && <NavLink to="/sign" activeClassName="active-link" className="link">signIn</NavLink>}
            </div>

        </div>
    )
}

export default Header
