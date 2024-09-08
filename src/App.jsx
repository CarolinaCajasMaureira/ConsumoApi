import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Views/CartContext';
import Navbar from './Components/Home/Navbar';
import Home from './Views/Home';
import Cart from './Views/Cart';
import Login from './Views/Login';
import Register from './Views/Register';
import Profile from './Views/Profile';
import NotFound from './Views/NotFound';
import Footer from './Components/Home/Footer';
import Header from './Components/Home/Header';

const App = () => {
  return (
    <CartProvider>
      <Router basename="/ConsumoApi">
        <div>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
