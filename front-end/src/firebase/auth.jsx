import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getAdditionalUserInfo } from "firebase/auth"
import { saveUserToDB } from "./db";

export const doSignUpWithEmailAndPassword = async (email, password, userName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
        displayName: userName
    });

    await saveUserToDB(userCredential.user);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const info = getAdditionalUserInfo(userCredential);

    if (info.isNewUser) {
        await saveUserToDB(userCredential.user);
    }
};

export const doSignOut = async () => {
    await auth.signOut();
};