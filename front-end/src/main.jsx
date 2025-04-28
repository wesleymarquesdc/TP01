import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './contexts/authContext/index.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // CONEXÃO COM O BACK-END
  <StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </StrictMode>
  /////////////////////////
)
