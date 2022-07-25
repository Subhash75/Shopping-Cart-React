import React from "react";

function Cart({ name, price, originalPrice, remove, index, image }) {
  return (
    <>
      <div className="cart-container">
        <div>
          <img src={image}></img>
          <div>
            <p>{name}</p>
            <p>₹{originalPrice}/kg</p>
            <button onClick={() => remove(index)}>Remove</button>
          </div>
        </div>
        <p>₹{price}</p>
      </div>
    </>
  );
}

export default Cart;
