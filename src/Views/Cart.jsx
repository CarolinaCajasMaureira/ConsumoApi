import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useUserContext } from '../Views/UserContext'; 

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useCart();
  const { token } = useUserContext(); 
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes estar logueado para realizar el checkout.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) {
        throw new Error("Error al procesar el checkout.");
      }

      const data = await response.json();
      setSuccessMessage("¡Compra exitosa! " + data.message);
      // Limpiar el carrito si es necesario
      // Aquí puedes agregar lógica para limpiar el carrito si deseas

    } catch (error) {
      console.error("Error en el checkout:", error);
      alert("Error en el checkout. Intenta nuevamente.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
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
            <button className="btn btn-primary" onClick={handleCheckout} disabled={!token}>Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
