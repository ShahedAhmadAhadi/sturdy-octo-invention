import React from 'react'
import { useState, userEffect } from 'react';
import { signInWithGoogle, auth } from '../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth'


function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password)
            // setPassword('')
            // setEmail('')
            console.log(email)
        } catch (error) {
            console.log(error)
        }

        setEmail('')
        setPassword('')
    }

    const handleChangeEmail = event => {
        const value = event.target.value
        console.log(event.target.value)
        setEmail(value)
    }
    const handleChangePassword = event => {
        const value = event.target.value
        setPassword(value)
    }



    return (
        <div className="form-wrapper">

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={email} required placeholder="E-mail" onChange={handleChangeEmail} />
                <input type="password" value={password} required placeholder="password" onChange={handleChangePassword} />
                <div style={{display:'flex', justifyContent:'center'}}>
                    <input type="submit" value="Submit"/>
                    <input type="submit" onClick={signInWithGoogle} value="Sign with google"/>
                </div>
            </form>
        </div>
    )
}

export default SignIn
