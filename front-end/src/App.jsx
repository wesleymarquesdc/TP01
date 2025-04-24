// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/Login.jsx';
// import CadastroItemPage from './pages/RegisterItemPage/RegisterItemPage';

function App() {

  return (
    <Routes>
      
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />   
      
    </Routes>
  )
}

export default App
