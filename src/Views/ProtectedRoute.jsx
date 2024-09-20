import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../Views/UserContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
