import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardPizza = ({ name, price, ingredients, img, id, addToCart }) => {
  const navigate = useNavigate();

  const goToPizza = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div className="card" style={{ width: "100%", maxWidth: "300px" }}>
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="card-text">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <div className="d-flex justify-content-between">
          {/* Cambiar el enlace a un botón para evitar el comportamiento del <a> */}
          <button onClick={goToPizza} className="btn btn-secondary">Ver más🍕</button>
          <button onClick={addToCart} className="btn btn-dark">Añadir🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
