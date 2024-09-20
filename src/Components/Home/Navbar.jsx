import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Views/CartContext';
import { useUserContext } from '../../Views/UserContext'; 

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUserContext(); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">🍕 Pizzería</Link>
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
            <Link className="nav-link" to="/">🍕 Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <button onClick={logout} className="btn btn-outline-light">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">🔐 Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">🔐 Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
