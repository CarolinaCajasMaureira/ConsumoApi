import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useUserContext(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      await register(email, password);
      navigate('/'); // Redirige al Home después del registro exitoso
    } catch (error) {
      setError('Error al registrarse.');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Registro</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label className="label">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
