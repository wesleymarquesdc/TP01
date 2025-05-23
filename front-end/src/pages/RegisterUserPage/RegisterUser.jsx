import React, { useState } from 'react'
import { doSignUpWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import './RegisterUser.css'
import SubmitButton from "../../components/Button/SubmitButton";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { Link } from 'react-router-dom'

const RegisterUser = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [userName, setUserName] = useState('')
        const [isSigningIn, setIsSigningIn] = useState(false)
        const [error, setError] = React.useState(null);

        // CONEXÃO COM O BACK-END
        const handleSubmit = async (e) => {
                e.preventDefault();

                if(!isSigningIn) {
                        setIsSigningIn(true)
                        try{
                                await doSignUpWithEmailAndPassword(email, password, userName)
                        }catch(err){
                                switch (err.code) {
                                        case "auth/weak-password":
                                          setError("A senha deve ter pelo menos 6 caracteres.");
                                          break;
                                        case "auth/invalid-email":
                                          setError("E-mail inválido.");
                                          break;
                                        default:
                                          setError("Erro ao registrar. Tente novamente.");
                                }
                                console.log(err); // debug
                        }finally{
                                setIsSigningIn(false)
                        }
                }
        };

        const onGoogleSignIn = async (e) => {
                e.preventDefault();
                if(!isSigningIn) {
                        setIsSigningIn(true)
                        try{
                                await doSignInWithGoogle()
                        }catch(err){
                                setError(err.message)
                                console.log(error)
                        }finally{
                                setIsSigningIn(false)
                        }
                }
        };
        /////////////////////////
        
        return (
                <div className='register'>
                <div className='register-container'>
                        <h2>Crie sua conta</h2>
                        <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Nome</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Digite seu nome" 
                                onChange={(e) => setUserName(e.target.value)}
                                required />

                                <label htmlFor="email">E-mail</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Digite seu e-mail" 
                                onChange={(e) => setEmail(e.target.value)}
                                required />

                                <label htmlFor="password">Senha</label>
                                <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Digite sua senha" 
                                onChange={(e) => setPassword(e.target.value)}
                                required />

                                <SubmitButton>Cadastrar</SubmitButton>
                                {error && <p style={{ color: "red" }}>{error}</p>} {/* Mensagem de erro */}

                                <p>OU</p>

                                <GoogleButton type="button" onClick={onGoogleSignIn}>
                                        Entrar com o Google
                                </GoogleButton>


                        <p className="login-link">
                                <span>Tem uma conta? </span>
                                <Link to="/login">Faça login</Link>
                        </p>
                        </form>
                </div>
                </div>
        )
}

export default RegisterUser;
