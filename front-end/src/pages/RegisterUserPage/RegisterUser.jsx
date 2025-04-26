import React from 'react'
import './style.css'
import GoogleButton from '../../components/GoogleButton/GoogleButton'

const RegisterUser = () => {
        
        return (
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

                                        <GoogleButton texto="Cadastrar com o Google" />


                                </form>
                                <p className="login-link">
                                        <span>tem uma conta? </span>
                                        <a href="/login">Faça Login</a>
                                </p>
                        </div>
        )
}

export default RegisterUser
