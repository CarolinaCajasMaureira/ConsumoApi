import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Views/UserContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password || !confirmPassword) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        // Almacenar el usuario en el contexto
        setUser({ email, password });
        navigate('/'); // Redirigir después de registrarse a la página de inicio
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
                <div className="formGroup">
                    <label className="label">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
