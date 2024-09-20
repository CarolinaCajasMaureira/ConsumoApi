import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext'; // Importa el UserContext

const Login = ({ registeredUsers }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setToken } = useUserContext(); // Obtiene setToken desde UserContext

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    // Verificar si el correo y la contraseña coinciden con algún usuario registrado
    const user = registeredUsers.find(user => user.email === email && user.password === password);

    if (!user) {
      setError('Credenciales incorrectas.');
      return;
    }

    // Establecer el token y redirigir al Home después de iniciar sesión exitosamente
    setToken(true); // Establece el token a true
    navigate('/'); // Redirige al Home
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
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
        <button type="submit" className="button">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
