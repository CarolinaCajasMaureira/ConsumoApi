import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './Views/CartContext';
import { UserProvider, useUserContext } from './Views/UserContext'; 
import Navbar from './Components/Home/Navbar';
import Home from './Views/Home';
import Cart from './Views/Cart';
import Login from './Views/Login';
import Register from './Views/Register';
import Profile from './Views/Profile';
import NotFound from './Views/NotFound';
import Footer from './Components/Home/Footer';
import Header from './Components/Home/Header';
import Pizza from './Views/Pizza';

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext();

  return token ? children : <Navigate to="/login" />;
};

const RedirectRoute = ({ children }) => {
  const { token } = useUserContext();

  return token ? <Navigate to="/" /> : children;
};

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router basename="/ConsumoApi">
          <div>
            <Navbar />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/login"
                element={
                  <RedirectRoute>
                    <Login />
                  </RedirectRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <RedirectRoute>
                    <Register />
                  </RedirectRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
