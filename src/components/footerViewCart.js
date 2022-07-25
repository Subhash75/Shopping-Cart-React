import React from "react";

function FooterViewCart({ length, totalCost, cartOpen }) {
  return (
    <div className="footer">
      <p>{totalCost}</p>
      <p>{length} items</p>
      <button onClick={cartOpen}>View Cart</button>
    </div>
  );
}

export default FooterViewCart;
