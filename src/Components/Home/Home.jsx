import React from 'react';
import CardPizza from './CardPizza';
import pizzas from './Pizzas';

const Home = ({ addToCart }) => {
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