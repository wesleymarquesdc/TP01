// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
        const isAuthenticated = localStorage.getItem('authToken') !== null;
        return isAuthenticated ? children : <Navigate to="/register" replace />;
}

export default ProtectedRoute;
