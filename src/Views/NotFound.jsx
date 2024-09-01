import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert('Esta página no existe :(');
  }, []);

  return (
    <div className="notfound-container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={() => navigate('/')} className="button">
        Volver al Home
      </button>
    </div>
  );
};

export default NotFound;