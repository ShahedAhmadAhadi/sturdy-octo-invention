import React from 'react'
import { useState, userEffect } from 'react';
// import { signInWithGoogle } from '../firebase/firebase.utils';

function signIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    handleSubmit = e => {
        e.preventDefault();

        setEmail('')
        setPassword('')
    }

    handleChangeEmail = event => {
        const value = event.target
        setEmail(value)
    }
    handleChangePassword = event => {
        const value = event.target
        setPassword(value)
    }



    return (
        <form onSubmit={() => handleSubmit()}>
            <input type="text" value={email} required placeholder="E-mail" onChange={handleChangeEmail} />
            <input type="password" value={password} required placeholder="password" onChange={handleChangePassword} />
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default signIn
