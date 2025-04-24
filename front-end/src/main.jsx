import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/LoginPage/Login.jsx'
import Dashboard from './pages/DashboardPage/Dashboard.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // Browser Route é para lidar com as rotas , para testar um componente sozinho, importe-o e remova a tag do BrowserRouter
  <StrictMode>
    {/* <BrowserRouter>
      <App/>
    </BrowserRouter> */}
    <Login/>
  </StrictMode>,
)
