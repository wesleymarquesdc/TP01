// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage/Login.jsx';
import DashboardPage from './pages/DashboardPage/Dashboard.jsx'
import RegisterUserPage from './pages/RegisterUserPage/RegisterUser.jsx'


function App() {
  // Substitua pela logica de autenticacao:
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão: redireciona conforme o estado de autenticação */}
        <Route
          path="/"
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" replace /> : 
            <Navigate to="/register" replace />
          }
        />

        {/* Rotas públicas */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rota protegida: só permite acessar a Dashboard se estiver autenticado */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <DashboardPage />
            ) : (
              <Navigate to="/register" replace />
            )
          }
        />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
