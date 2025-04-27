import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth"

export const doSignUpWithEmailAndPassword = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: name
        });
    } catch (err){
        console.log(err)
    }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err){
        console.log(err)
    }
};

export const doSignInWithGoogle = async () => {
    try{
        const provider = new GoogleAuthProvider();

        await signInWithPopup(auth, provider);
    } catch (err){
        console.log(err)
    }
};

export const doSignOut = async () => {
    try{
        await auth.signOut();
    } catch (err){
        console.log(err)
    }
};