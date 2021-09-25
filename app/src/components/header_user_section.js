import React from 'react'
import {child} from './styles/header_user_section.css'
import { FaCaretDown } from 'react-icons/fa'
import UserDropdown from './user_func_dropdown'


function UserSection(props) {

    console.log(props)

    let sliceDisplayName = props.user.displayName.slice(0, 6)

    return (
        <div className="child" onClick={props.dropdownToggle}>
            <span className="name-container">{sliceDisplayName}</span>
            <span className="image-container"><img src={props.user.photoURL} className="user-image" /></span>
            <span className="caret-container" ><FaCaretDown /></span>
        </div>
    )
}

export default UserSection
