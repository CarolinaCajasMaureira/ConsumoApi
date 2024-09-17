import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); // Estado inicial del token

    const logout = () => {
        setToken(false); // Cambia el estado del token a false al hacer logout
    };

    return (
        <UserContext.Provider value={{ token, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
