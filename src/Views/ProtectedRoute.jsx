/* import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../Views/UserContext';

const ProtectedRoute = ({ element, ...rest }) => {
    const { token } = useUserContext();

    return (
        <Route
            {...rest}
            element={token ? element : <Navigate to="/login" replace />}
        />
    );
};

export default ProtectedRoute; */
