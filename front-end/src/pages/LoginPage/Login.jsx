import "./Login.css"
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SubmitButton from "../../components/Button/SubmitButton";
import GoogleButton from "../../components/GoogleButton/GoogleButton";

const Login = () => {
        const navigate = useNavigate();
        const [error, setError] = React.useState(null);

        const handleSubmit = async (event) => {
                event.preventDefault();

                // Simule uma chamada à uma API para autenticar o usuário.
                // Aqui você pode ter uma lógica de autenticação real.
                const autenticado = true; // substitua pela sua lógica de autenticação
        
                if (autenticado) {
                        // Se o usuário for autenticado, redireciona para a página /dashboard.
                        setError('');
                        navigate("/dashboard", { replace: true });
                } else {
                        // Caso contrário, trate o erro (exibir mensagem, limpar campos, etc.)
                        setError("Email ou senha inválidos!");
                        console.log("Falha na autenticação");
                        return
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

                                <SubmitButton>Entrar</SubmitButton>
                                <ErrorMessage message={error}></ErrorMessage>
                                <GoogleButton style={{marginTop: "15px"}} >Entrar com o Google</GoogleButton>
                                
                                <p className="login-link" style={{textAlign: "center"}}>
                                        <span>Não tem uma conta? </span>
                                        <Link to="/register">Faça cadastro</Link>
                                </p>
                        </form>
                        </div>
                </div>
                </>
        )
}

export default Login