import { initializeApp } from 'firebase/app';
import {collection, doc, getFirestore, getDoc, setDoc, onSnapshot} from 'firebase/firestore';
import { GoogleAuthProvider,getAuth, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcj01rFFLGXMo9OSjRvQA-o1Vk8HGAziM",
    authDomain: "todo-db-413c6.firebaseapp.com",
    projectId: "todo-db-413c6",
    storageBucket: "todo-db-413c6.appspot.com",
    messagingSenderId: "282864484646",
    appId: "1:282864484646:web:8d2924363d4b848f8bc1e7",
    measurementId: "G-G818VE4N99"
}

initializeApp(config);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider)

const db = getFirestore()

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log(userAuth, additionalData, 'alsjd')
    if(!userAuth) return;

    const users = collection(db, 'users')
    const userRef = doc(users, userAuth.uid)

    const snapShot = await getDoc(userRef)

    if (!snapShot.exists()) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();
        console.log(userAuth)
        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                photoURL,
                ...additionalData
            })
        } catch (error) {
            console.log('error', error.message)
        }
    }

    // console.log(userRef)


    return userRef;

    // console.log(doc(users, 'slkjSF2'))
}


// .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     console.log(credential)
//     // const token = credential.accessToken;
//     // // The signed-in user info.
//     // const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// export default firebase;
