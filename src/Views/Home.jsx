import React, { useEffect, useState } from 'react';
import CardPizza from '../Components/Home/CardPizza';

const Home = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error al cargar las pizzas:', error));
  }, []);
  console.log("pizzas: ", pizzas)  
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
