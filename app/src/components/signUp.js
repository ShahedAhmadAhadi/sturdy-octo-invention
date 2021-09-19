import React from 'react'
import { auth, createUserProfileDocument} from '../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes} from 'firebase/storage'
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

            
            
            const storage = getStorage();
            
            const storageRef = ref(storage, image.name)
            // const fileRef = storageRef.child(image.name)
            const uploadImage = await uploadBytesResumable(storageRef, image)
            
            const photoURL = await getDownloadURL(uploadImage.ref)
            await console.log(photoURL, displayName)
            
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfileDocument(user, {displayName: displayName, photoURL: photoURL})

            setEmail('')
            setImage('')
            setPassword('')
            setConfirmPassword('')
            setDisplayName('')
            
        } catch (error) {
            console.error(error)
        }
    }

    const handleImage = async (e) => {
        console.log(e)
        setImage(e.target.files[0])        
        // storageRef.put(image).then(() => {
        //     console.log('file uploaded', image.name)
        // })
        // const uploadImage = uploadBytes(storageRef, image)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} required placeholder="displayName" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="password" />
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required placeholder="confirm-password" />
                <input type="file" onChange={(e) => handleImage(e)} required placeholder="file" />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
