import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Home/Cart';
import Navbar from './Components/Home/Navbar';
import Login from './Components/Home/Login';
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer';
import Register from './Components/Home/Register';
import Header from './Components/Home/Header';
import pizzas from './Components/Home/Pizzas';
import Pizza from './Components/Home/Pizza';

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
          {/* <Route path="/" element={ <Home addToCart={addToCart} pizzas={pizzas} />} /> Descomentar esta linea y comentar la linea de arriba para ver todas las pizzas */}
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