import React from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import { useState, useEffect } from 'react'
function signUp() {

    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [image, setImage] = useState('')

    return (
        <div>
            <form>
                <input type="text" value={displayName} required />
                <input type="email" value={email} required />
                <input type="password" value={password} required />
                <input type="password" value={confirmPassword} required />
                <input type="file" value={image} required />
            </form>
        </div>
    )
}

export default signUp
