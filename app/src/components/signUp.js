import React from 'react'
import { auth, createUserProfileDocument} from '../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useState, useEffect } from 'react'
function SignUp() {

    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [image, setImage] = useState('')


    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password not match')
            return
        }

        try {

            const { user } = await createUserWithEmailAndPassword(auth, email, password)

            await createUserProfileDocument(user, displayName, image)

            setEmail('')
            setImage('')
            setPassword('')
            setConfirmPassword('')
            setDisplayName('')
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} required placeholder="displayName" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="password" />
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required placeholder="confirm-password" />
                <input type="file" onChange={e => setImage(e.target.files[0])} required placeholder="file" />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
