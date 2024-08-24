import React, { useEffect, useState } from 'react';
import CardPizza from './CardPizza';

const Pizza = ({ }) => {
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error al cargar las pizzas:', error));
  }, []);
  console.log("pizza: ", pizzas)  
  return (
    <div className="container-fluid py-5">
      <div className="row">
        {pizzas && (
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <CardPizza {...pizzas} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pizza;
