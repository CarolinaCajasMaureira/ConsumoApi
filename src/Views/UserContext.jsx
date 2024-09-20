import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); 
  const [user, setUser] = useState(null);

  const logout = () => {
    setToken(false); 
    setUser(null); 
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

