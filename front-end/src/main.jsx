import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// import Login from './pages/LoginPage/Login.jsx'
import RegisterUser from './pages/RegisterUserPage/RegisterUser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterUser />
  </StrictMode>,
)
