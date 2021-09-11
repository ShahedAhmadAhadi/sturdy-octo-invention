import React from 'react'
import './styles/header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="wrapper">
            <h1 className="header">
            Logo
            </h1>
            <div className="list">
            <NavLink to="/" activeClassName="active-link">Home</NavLink>
            <NavLink to="/sign" activeClassName="active-link">Sign</NavLink>
            <NavLink to="l" activeClassName="active-link">Link</NavLink>
            </div>

        </div>
    )
}

export default Header
