import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Views/Cart';
import Navbar from './Components/Home/Navbar';
import Login from './Views/Login';
import Home from './Views/Home';
import Footer from './Components/Home/Footer';
import Register from './Views/Register';
import Header from './Components/Home/Header';
import pizzas from './Components/Home/Pizzas';
import Pizza from './Views/Pizza';
import NotFound from './Views/NotFound';
import Profile from './Views/Profile';

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
    <Router basename="/ConsumoApi">
      <div>
        <Navbar total={total} /> {/* Pasa el total como prop */}
        <Header />
        <Routes>
          <Route path="/" element={ <Pizza />} /> 
          {/* <Route path="/" element={<Home addToCart={addToCart} pizzas={pizzas} />} /> */}
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} total={total} />} /> {/* Pasa el total como prop */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;