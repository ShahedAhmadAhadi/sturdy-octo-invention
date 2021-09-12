import React from 'react'

function UserDropdown(props) {
    return (
        <ul>
            <li>{props.user.displayName}</li>
        </ul>
    )
}

export default UserDropdown
