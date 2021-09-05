import React from 'react'
import { useState, userEffect } from 'react';
import { signInWithGoogle } from '../firebase/firebase.utils';

function signIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    handleSubmit = e => {
        e.preventDefault();

        setEmail('')
        setPassword('')
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} required placeholder="E-mail" />
            <input type="password" value={password} required placeholder="password" />
            <input type="submit" value/>
        </form>
    )
}

export default signIn
