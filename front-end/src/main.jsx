import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/authContext.jsx'
import { ChatProvider } from './contexts/chatContext.jsx'
import { CategoryProvider } from './contexts/categoryContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ChatProvider>
        <CategoryProvider>
          <App/>
        </CategoryProvider>
      </ChatProvider>
    </AuthProvider>
  </StrictMode>
)
