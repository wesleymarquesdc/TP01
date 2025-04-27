// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { useAuth } from './contexts/authContext/index.jsx';
import LoginPage from './pages/LoginPage/Login.jsx';
import DashboardPage from './pages/DashboardPage/Dashboard.jsx'
import RegisterPage from './pages/RegisterPage/Register.jsx'


function App() {
  const { userLoggedIn } = useAuth()
  const isAuthenticated = userLoggedIn

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão: redireciona conforme o estado de autenticação */}
        <Route
          path="/"
          element={
            isAuthenticated ?
            <Navigate to="/dashboard" replace /> : 
            <Navigate to="/login" replace />
          }
        />

        {/* Rotas públicas */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route 
          path="/register" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <RegisterPage />
            )
          }
        />

        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route 
          path="/login" 
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage />
            )
          }
        />

        {/* Rota protegida: só permite acessar a Dashboard se estiver autenticado */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <DashboardPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
