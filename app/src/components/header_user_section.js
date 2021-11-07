import React from 'react'
import { child } from './styles/header_user_section.css'
import { FaCaretDown } from 'react-icons/fa'
import UserDropdown from './user_func_dropdown'
import { setDropdownToggle, dropdownToggle } from '../redux/dropdown/func-dropdown'
import { useDispatch, useSelector } from 'react-redux'


function UserSection(props) {
    const dispatch = useDispatch()
    const dropdown = useSelector(dropdownToggle)

    console.log(props)

    let sliceDisplayName = props.user.displayName.slice(0, 6)

    return (
        // <div className="child" onClick={() => {setDropdownToggle('DROPDOWN')}}>
        <div className="child" onClick={(e) => { dispatch(setDropdownToggle(!dropdown)); e.stopPropagation() }}>
            <span className="name-container">{sliceDisplayName}</span>
            <span className="image-container"><img src={props.user.photoURL} className="user-image" /></span>
            <span className="caret-container" ><FaCaretDown /></span>
        </div>
    )
}

export default UserSection
