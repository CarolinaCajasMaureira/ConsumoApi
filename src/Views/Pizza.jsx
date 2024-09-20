import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Pizza no encontrada'); 
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error fetching pizza:', error);
        setError('Pizza no encontrada o cargando...');
      }
    };

    fetchPizza();
  }, [id]);

  if (error) return <div className="text-center">{error}</div>;

  if (!pizza) return <div className="text-center">Cargando...</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img 
            src={pizza.img} 
            alt={pizza.name} 
            className="img-fluid rounded" 
            style={{ maxHeight: '400px', objectFit: 'cover' }} 
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{pizza.name}</h1>
          <p className="lead">{pizza.description}</p>
          <p className="h5">Precio: <strong>${pizza.price.toLocaleString()}</strong></p>
          <h6 className="mt-4">Ingredientes:</h6>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="border-bottom py-1">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-dark">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Pizza;
