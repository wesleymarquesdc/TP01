import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth"

export const doSignUpWithEmailAndPassword = async (email, password, userName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
        displayName: userName
    });
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
};

export const doSignOut = async () => {
    await auth.signOut();
};