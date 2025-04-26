import React, { useState } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSignUpWithEmailAndPassword, doSignOut } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

export const LoginTeste = () => {
    const { userLoggedIn, currentUser } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSignUp = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignUpWithEmailAndPassword(email, password, name)
        }
    }

    const onSignIn = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithGoogle()
        }
    }

    const onSignOut = async (e) => {
        e.preventDefault()
        await doSignOut()
    }

    return (
        <div>
            {/* {userLoggedIn && (<Navigate to={'/home'} replace={true} />)} */}
            <input placeholder="Name..." 
            onChange={(e) => setName(e.target.value)}
            />
            <input placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input placeholder="Password..." 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onSignIn}> Sign In </button>

            <button onClick={onSignUp}> Sign Up </button>

            <button onClick={onGoogleSignIn}> Continue with Google </button>

            <button onClick={onSignOut}> Logout </button>
        </div>
    );
};