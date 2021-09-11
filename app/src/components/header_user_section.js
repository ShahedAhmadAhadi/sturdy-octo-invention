import React from 'react'
import {child} from './styles/header_user_section.css'


function UserSection(props) {

    console.log(props.user.displayName + "user_section")

    return (
        <div className="child">
            <span>{props.user.displayName}</span>
            <span className="image-container"><img src={props.user.photoURL} className="user-image" /></span>
        </div>
    )
}

export default UserSection
