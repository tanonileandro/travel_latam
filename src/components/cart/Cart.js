import React from 'react';
import './Cart.css'; //placeholder

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      <h1>Carrito</h1>
      {cartItems && cartItems.length === 0 ? (
        <p>No hay elementos en el carrito.</p>
      ) : (
        <ul>
          {cartItems && cartItems.map((item, index) => (
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

