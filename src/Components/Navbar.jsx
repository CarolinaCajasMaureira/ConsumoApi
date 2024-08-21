import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ total }) => {
  const navigate = useNavigate();
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">🍕 Pizzería</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => navigate('/')}>🍕 Home</a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">🔓 Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔒 Logout</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/login')}>🔐 Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/register')}>🔐 Register</a>
              </li>
            </>
          )}
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => navigate('/cart')}>🛒 Total: ${total.toLocaleString()}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;