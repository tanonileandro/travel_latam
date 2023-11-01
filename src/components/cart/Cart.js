import React from 'react';

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
