import React from 'react'
import './styles/header.css'
import { NavLink } from 'react-router-dom'
import { UserSection } from './header_user_section'

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
            {/* {props.user && <a className="link" onClick={() => props.signOut()}>Sign Out</a>} */}
            {props.user && <UserSection user={props.user} /> }
            {!props.user && <NavLink to="/sign" activeClassName="active-link" className="link">sign In</NavLink>}

            </div>

        </div>
    )
}

export default Header
