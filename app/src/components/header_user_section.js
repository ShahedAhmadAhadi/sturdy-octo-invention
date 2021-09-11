import React from 'react'
import {child} from './styles/header_user_section.css'


function UserSection(props) {

    console.log(props.user.displayName + "user_section")

    return (
        <div className="child">
            {props.user.displayName}
        </div>
    )
}

export default UserSection
