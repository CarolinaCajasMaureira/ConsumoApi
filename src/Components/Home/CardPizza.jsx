import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardPizza = ({ name, price, ingredients, img, id, addToCart }) => {
  const navigate = useNavigate();

  const goToPizza = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div className="card shadow-sm" style={{ width: "100%", maxWidth: "300px" }}>
      <img className="card-img-top" src={img} alt={name} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <div className="d-flex justify-content-between">
          <button onClick={goToPizza} className="btn btn-secondary">Ver más🍕</button>
          <button onClick={addToCart} className="btn btn-dark">Añadir🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
