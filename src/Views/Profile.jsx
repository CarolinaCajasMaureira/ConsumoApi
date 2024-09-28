import React, { useEffect, useState } from 'react';
import { useUserContext } from './UserContext'; 

const Profile = () => {
  const { user, logout } = useUserContext(); 
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  return (
    <div className="profile-container">
      <h2>Usuario: {email}</h2>
      <button onClick={logout} className="logout-button">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
