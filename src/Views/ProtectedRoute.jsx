// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../Views/UserContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext();

  // Si el token es false, redirige a /login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Si el token es true, renderiza los hijos
};

export default ProtectedRoute;
