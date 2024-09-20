import React, { useEffect, useState } from 'react';
import CardPizza from '../Components/Home/CardPizza';
import { useCart } from './CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error al cargar las pizzas');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPizzas();
  }, []);

  if (pizzas.length === 0) {
    return <div>No hay pizzas disponibles en este momento.</div>; 
  }

  return (
    <div className="container-fluid py-5">
      <div className="row">
        {pizzas.map((pizza, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={index}>
            <CardPizza {...pizza} addToCart={() => addToCart(pizza)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
