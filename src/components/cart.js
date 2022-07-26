import React from "react";
import CartContainer from "./cartContainer";

function Cart({ cart, length, closeCart, addToCart, remove }) {
  return (
    <>
      {cart ? (
        <div className="main-cart">
          <div className="Cart-Overlay">
            <div className="card-title">
              <div>
                <p>My Cart ({length})</p>
                <p>
                  Pincode: <b>380015</b>
                </p>
              </div>
              <button onClick={closeCart}>Close</button>
            </div>
            {addToCart.map((value, index) => {
              return (
                <CartContainer
                  image={value.image}
                  name={value.title}
                  price={value.cost}
                  originalPrice={value.originalPrice}
                  key={index}
                  index={index}
                  remove={remove}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
