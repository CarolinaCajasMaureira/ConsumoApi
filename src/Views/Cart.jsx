import React from 'react';
import { useCart } from './CartContext';
import { useUserContext } from '../Views/UserContext'; // Importar el contexto de usuario

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useCart();
  const { token } = useUserContext(); // Obtener el estado del token

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="list-group">
          {cart.map((item) => (
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={item.img} alt={item.name} style={{ width: "50px", marginRight: "15px" }} />
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1">Precio: ${item.price.toLocaleString()}</p>
                  <p className="mb-1">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-secondary btn-sm mx-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                <button className="btn btn-secondary btn-sm mx-2" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}
          <div className="list-group-item d-flex justify-content-between">
            <h5>Total: ${total.toLocaleString()}</h5>
            <button className="btn btn-primary" disabled={!token}>Pagar</button> {/* Deshabilitar el botón si token es false */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
