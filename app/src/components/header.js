import React from 'react'
import './styles/header.css'
import { NavLink } from 'react-router-dom'
import UserSection from './header_user_section'
import UserDropdown from './user_func_dropdown'
import {useState} from 'react'
import Cart from './cart'

function Header(props) {

    const [dropdownToggle, setDropdownToggle] = useState(false)

    console.log(dropdownToggle)

    return (
        <div className="wrapper">
            <h1 className="header">
                Logo
            </h1>
            <div className="inner-wrapper">
                <div className="list" style={{position: 'relative'}}>

                    <NavLink to="/" activeClassName="active-link" className="link">Home</NavLink>
                    <div className="link">Catagories
                    </div>
                    <Cart />
                </div>
                <div className="list">
                    {!props.user && <NavLink to="/signup" activeClassName="active-link" className="link">Sign Up</NavLink>}
                    {/* {props.user && <AiOutlineShoppingCart className="link" style={{fontSize: '1.1rem'}} /> } */}
                    {/* {props.user && <a className="link" onClick={() => props.signOut()}>Sign Out</a>} */}
                    {props.user && <UserSection user={props.user} dropdownToggle={() => setDropdownToggle(!dropdownToggle)}></UserSection>}
                    {!props.user && <NavLink to="/sign" activeClassName="active-link" className="link">sign In</NavLink>}
                    {dropdownToggle && <UserDropdown user={props.user} signOut={props.signOut} dropdownToggle={()=> setDropdownToggle(!dropdownToggle)} />}

                </div>

            </div>
            

        </div>
    )
}

export default Header
