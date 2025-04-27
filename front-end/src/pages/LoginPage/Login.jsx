import "./Login.css"
import React from 'react'
import { doSignInWithEmailAndPassword, doSignInWithGoogle} from '../../firebase/auth';
import { Link } from 'react-router-dom'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SubmitButton from "../../components/Button/SubmitButton";
import GoogleButton from "../../components/GoogleButton/GoogleButton";

const Login = () => {
        const [email, setEmail] = React.useState('')
        const [password, setPassword] = React.useState('')
        const [isSigningIn, setIsSigningIn] = React.useState(false)
        const [error, setError] = React.useState(null);

        const handleSubmit = async (event) => {
                event.preventDefault();

                
                if(!isSigningIn) {
                        setIsSigningIn(true)
                        try{
                                await doSignInWithEmailAndPassword(email, password)
                        }catch(err){
                                setError(err.message)
                                console.log(err)
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
                                setError(err.message)
                                console.log(err)
                        }finally{
                                setIsSigningIn(false)
                        }
                }
        };

        return(
                <>
                <div className="login">
                        <div className="login-container">
                                <header className="login-header">
                                        <h1>Sistema de Achados e Perdidos</h1>
                                </header>
                        

                        <h2>Login</h2>

                        <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />

                                <label htmlFor="password">Senha</label>
                                <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                />

                                <SubmitButton>Entrar</SubmitButton>
                                <ErrorMessage message={error}></ErrorMessage>
                                <GoogleButton onClick={onGoogleSignIn} style={{marginTop: "15px"}} >
                                        Entrar com o Google
                                </GoogleButton>
                                
                                <p className="login-link" style={{textAlign: "center"}}>
                                        <span>Não tem uma conta? </span>
                                        <Link to="/register">Faça Cadastro</Link>
                                </p>
                        </form>
                        </div>
                </div>
                </>
        )
}

export default Login