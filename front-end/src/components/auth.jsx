import React, { useState } from 'react';
import { auth, googleProvide } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.log(err)
        }
    };

    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvide)
        } catch (err) {
            console.log(err)
        }
    };

    const logOut = async () => {
        try{
            await signOut(auth)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <input placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input placeholder="Password..." 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}> Sign In </button>

            <button onClick={signInWithGoogle}> Sign In with Google </button>

            <button onClick={logOut}> Logout </button>
        </div>
    );
};