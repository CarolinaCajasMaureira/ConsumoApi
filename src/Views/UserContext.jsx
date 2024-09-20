import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); 
    const [user, setUser] = useState(null); // Estado para almacenar el usuario

    const logout = () => {
        setToken(false); 
        setUser(null); // Limpiar el usuario al hacer logout
    };

    return (
        <UserContext.Provider value={{ token, user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
