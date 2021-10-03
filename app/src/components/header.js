import React from 'react'
import './styles/header.css'
import { NavLink } from 'react-router-dom'
import UserSection from './header_user_section'
import UserDropdown from './user_func_dropdown'
import {useState} from 'react'
import Cart from './cart'
import { connect } from 'react-redux'

function Header({currentUser}, props) {

    const [dropdownToggle, setDropdownToggle] = useState(false)

    console.log(dropdownToggle)

    console.log(currentUser, 'asldfjlsj')

    return (
        <div className="wrapper">
            <h1 className="header">
                Logo
            </h1>
            <div className="inner-wrapper">
                <div className="list" style={{position: 'relative'}}>

                    <NavLink to="/" exact activeClassName="active-link" className="link">Home</NavLink>
                    <div className="link">Catagories
                    </div>
                    <Cart />
                </div>
                <div className="list">
                    {!currentUser && <NavLink to="/signup" activeClassName="active-link" className="link">Sign Up</NavLink>}
                    {/* {currentUser && <AiOutlineShoppingCart className="link" style={{fontSize: '1.1rem'}} /> } */}
                    {/* {currentUser && <a className="link" onClick={() => props.signOut()}>Sign Out</a>} */}
                    {currentUser && <UserSection user={currentUser} dropdownToggle={() => setDropdownToggle(!dropdownToggle)}></UserSection>}
                    {!currentUser && <NavLink to="/sign" activeClassName="active-link" className="link">sign In</NavLink>}
                    {dropdownToggle && <UserDropdown user={currentUser} signOut={props.signOut} dropdownToggle={()=> setDropdownToggle(!dropdownToggle)} />}

                </div>

            </div>
            

        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
