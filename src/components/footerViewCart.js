import React from "react";

function FooterViewCart({ length, totalCost, openTheCart }) {
  return (
    <div className="footer">
      <p>₹ {totalCost}</p>
      <p>{length} items</p>
      <button onClick={openTheCart}>View Cart</button>
    </div>
  );
}

export default FooterViewCart;
