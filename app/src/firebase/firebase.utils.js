import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
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

const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;
