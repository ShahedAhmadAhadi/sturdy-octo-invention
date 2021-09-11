import React from 'react'
import './styles/header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="wrapper">
            <h1 className="header">
            To-Do
            </h1>
            <div className="list">
            <NavLink to="/" activeClassName="">Home</NavLink>
            <NavLink to="/" activeClassName="">Sign</NavLink>
            <NavLink to="/" activeClassName="">Home</NavLink>
            </div>

        </div>
    )
}

export default Header
