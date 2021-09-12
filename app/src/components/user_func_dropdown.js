import React from 'react'
import './styles/user_func_dropdown.css'

function UserDropdown(props) {
    console.log(props)
    return (
        <div className='dropdown'>

        <ul className="list">
            <li>{props.user.displayName}</li>

        </ul>
        <ul className="list">
            <li onClick={()=> {props.dropdownToggle() ;props.signOut();}}>Sign Out</li>

        </ul>
        </div>
    )
}

export default UserDropdown
