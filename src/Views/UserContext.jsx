import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      console.error('Error en login:', error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error al registrarse');
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      console.error('Error en register:', error);
    }
  };

  const logout = () => {
    // Eliminar el token y el email del estado
    setToken(null);
    setEmail('');
    setProfile(null); // Limpiar el perfil al cerrar sesión
  };

  const fetchProfile = async () => {
    if (!token) return; // No hay token, no se puede obtener el perfil

    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener el perfil');
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error('Error en fetchProfile:', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, register, logout, fetchProfile }}>
      {children}
    </UserContext.Provider>
  );
};
