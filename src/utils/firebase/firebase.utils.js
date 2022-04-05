import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9aM2z5ZH46GqXl23zyRqVx2uvVy-ORFk",
    authDomain: "doggo-clothing-db.firebaseapp.com",
    projectId: "doggo-clothing-db",
    storageBucket: "doggo-clothing-db.appspot.com",
    messagingSenderId: "976479744484",
    appId: "1:976479744484:web:7383c24453d5c17b0917f1"
  };
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth()
export const db = getFirestore()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (err) {
            console.log('error creating the user', err.message)
        }
    }
    return userDocRef;
}