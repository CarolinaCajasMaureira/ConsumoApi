import React from 'react';

const Cart = ({ cart, setCart, total }) => {
  const increaseQuantity = (id) => {
    setCart((prevcart) =>
      prevcart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevcart) =>
      prevcart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

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
            <h5>Total: ${total.toLocaleString()}</h5> {/* Muestra el total */}
            <button className="btn btn-primary">Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;