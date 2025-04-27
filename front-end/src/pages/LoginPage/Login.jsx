import "./Login.css"
import React, { useState } from 'react'
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut } from '../../firebase/auth';
import { Link } from 'react-router-dom'
import SubmitButton from "../../components/Button/SubmitButton";
import GoogleButton from "../../components/GoogleButton/GoogleButton";

const Login = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [isSigningIn, setIsSigningIn] = useState(false)
        const [error, setError] = React.useState(null);

        const handleSubmit = async (event) => {
                event.preventDefault();

                if(!isSigningIn) {
                        setIsSigningIn(true)
                        try{
                                await doSignInWithEmailAndPassword(email, password)
                        }catch(err){
                                setError(err)
                                console.log(error)
                        }finally{
                                setIsSigningIn(false)
                        }
                }
        };

        const onGoogleSignIn = async (e) => {
                if(!isSigningIn) {
                        setIsSigningIn(true)
                        try{
                                await doSignInWithGoogle()
                        }catch(err){
                                setError(err)
                                console.log(error)
                        }finally{
                                setIsSigningIn(false)
                        }
                }
        };

        // teste
        const onSignOut = async (e) => {
                e.preventDefault()
                await doSignOut()
        }

        return(
                <div className="login">
                        <div className="login-container">
                                <header className="login-header">
                                        <h1>Sistema de Achados e Perdidos da UFMG</h1>
                                </header>
                        

                        <h2>Login</h2>

                        <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                />

                                <label htmlFor="password">Senha</label>
                                <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                />

                                <SubmitButton>Entrar</SubmitButton>
                                <GoogleButton type="button" onClick={onSignOut} style={{marginTop: "15px"}} >
                                        Entrar com o Google
                                </GoogleButton>
                                
                                <p className="login-link" style={{textAlign: "center"}}>
                                        <span>Não tem uma conta? </span>
                                        <Link to="/register">Faça cadastro</Link>
                                </p>
                        </form>
                        </div>
                </div>
        )
}

export default Login