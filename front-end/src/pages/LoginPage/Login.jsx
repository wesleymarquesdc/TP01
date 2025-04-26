import "./Login.css"
import React from 'react'

const Login = () => {

        const handleSubmit = async (event) => {
                event.preventDefault();

                
        };

        return(
                <>
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
                                placeholder="Email @ufmg"
                                required
                                />

                                <label htmlFor="password">Senha</label>
                                <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                required
                                />

                                <button type="button">Entrar</button>

                        </form>
                        </div>
                        </div>
                </>
        )
}

export default Login