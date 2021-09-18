import React from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import { useState, useEffect } from 'react'
function SignUp() {

    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [image, setImage] = useState('')

    handleSubmit = async event => {
        event.perventDefault();

        if (password !== confirmPassword) {
            alert('password not match')
            return
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName, image})

            setEmail('')
            setImage('')
            setPassword('')
            setConfirmPassword('')
            setDisplayName('')
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={displayName} required />
                <input type="email" value={email} required />
                <input type="password" value={password} required />
                <input type="password" value={confirmPassword} required />
                <input type="file" value={image} required />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
