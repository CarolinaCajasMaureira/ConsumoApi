import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Header from './Components/Header';
import pizzas from './Components/Pizzas';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart(prevCart => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <Router>
      <div>
        <Navbar total={total} /> {/* Pasa el total como prop */}
        <Header />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} pizzas={pizzas} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} total={total} />} /> {/* Pasa el total como prop */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;