import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

// import Login from './pages/LoginPage/Login.jsx'
//import RegisterUser from './pages/RegisterUserPage/RegisterUser.jsx'
//import Dashboard from './pages/DashboardPage/Dashboard.jsx'
import { LoginTeste } from './pages/LoginTeste.jsx'
import { AuthProvider } from './contexts/authContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LoginTeste />
    </AuthProvider>
  </StrictMode>,
)