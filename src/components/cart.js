import React from "react";

function Cart({ name, price, remove, index }) {
  return (
    <>
      <div className="cart-container">
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={() => remove(index)}>Remove from Cart</button>
      </div>
    </>
  );
}

export default Cart;
