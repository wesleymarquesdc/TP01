import "./Login.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
        const navigate = useNavigate();

        const handleSubmit = async (event) => {
                event.preventDefault();

                // Simule uma chamada à uma API para autenticar o usuário.
                // Aqui você pode ter uma lógica de autenticação real.
                const autenticado = true; // substitua pela sua lógica de autenticação
        
                if (autenticado) {
                        // Se o usuário for autenticado, redireciona para a página /dashboard.
                        navigate("/dashboard", { replace: true });
                } else {
                        // Caso contrário, trate o erro (exibir mensagem, limpar campos, etc.)
                        console.log("Falha na autenticação");
                }
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