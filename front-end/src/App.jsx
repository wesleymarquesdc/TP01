import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth } from './components/auth.jsx'

function App() {

  return (
    <Router>
        <Routes>
      
        <Route path="/" element={<Auth />} />
      
        </Routes>
    </Router>
  )
}

export default App
