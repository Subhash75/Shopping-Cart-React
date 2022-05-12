import React from "react";

function Cart({ name, remove, index }) {
  return (
    <>
      <div className="cart-container">
        <p>{name}</p>
        <button onClick={() => remove(index)}>Remove from Cart</button>
      </div>
    </>
  );
}

export default Cart;
