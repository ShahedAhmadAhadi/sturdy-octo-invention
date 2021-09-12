import React from 'react'
import './styles/user_func_dropdown.css'

function UserDropdown(props) {
    return (
        <ul className='dropdown'>
            <li>{props.user.displayName}</li>
        </ul>
    )
}

export default UserDropdown
