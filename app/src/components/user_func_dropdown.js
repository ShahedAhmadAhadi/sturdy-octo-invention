import React from 'react'
import './styles/user_func_dropdown.css'

function UserDropdown(props) {

    console.log(props)
    return (

        <div className='dropdown' onClick={e => e.stopPropagation()}>

            <ul className="dropdown-list">
                <li className="list-item-0">{props.user.displayName}</li>

            </ul>
            <ul className="dropdown-list">
                <li onClick={() => { props.dropdownToggle(); props.signOut(); }} className="list-item-1">Sign Out</li>

            </ul>
        </div>
    )
}

export default UserDropdown
