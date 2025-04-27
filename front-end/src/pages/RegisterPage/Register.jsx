import React from 'react'
import './Register.css'
import GoogleButton from '../../components/GoogleButton/GoogleButton'
import { Link } from 'react-router-dom'

const Register = () => {
        
        return (
                        <div className='register'>
                        <div className='register-container'>
                                <h2>Crie sua conta</h2>
                                <form >
                                        <label htmlFor="name">Nome</label>
                                        <input type="text" id="name" name="name" placeholder="Digite seu nome" required />

                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

                                        <label htmlFor="password">Senha</label>
                                        <input type="password" id="password" name="password" placeholder="Digite sua senha" required />

                                        <button type="submit">Cadastrar</button>
                                        
                                        <p>OU</p>

                                        <GoogleButton>Entrar com o Google</GoogleButton>


                                </form>
                                <p className="login-link">
                                        <span>tem uma conta? </span>
                                        <Link to="/login">Faça login</Link>
                                </p>
                        </div>
                        </div>
        )
}

export default Register
