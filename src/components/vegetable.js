import React, { useState } from "react";


function Vegetable({ name, price, image, index, handleCart }) {
  let priceTag = price.substring(0, 3);
  priceTag = priceTag.substring(1);

  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity >= 10) {
      return;
    }
    setQuantity(quantity + 1);
    handleCart({ image: image, title: name, cost: priceTag * (quantity + 1), originalPrice: priceTag });
  };

  const decrement = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
    handleCart({ title: name, cost: priceTag * (quantity - 1), originalPrice: priceTag });
  };

  return (
    <>
      <div className="vegetable-container" key={index}>
        <div className="veg-description">
          <p className="veg-name">{name}</p>
          <p className="veg-price">{price}</p>
          <p className="veg-desc">
            Brinjal belongs to the family of Solanaceae, also commonly known as
            nightshades, and are cousins of potatoes, tomatoes and bell peppers.
          </p>
        </div>
        <div className="veg-img">
          <img src={image} alt="veggie" />
          {/* <p>{priceTag * quantity}</p> */}
          <div className="quantity">
            <button onClick={decrement}>-</button>
            <p>{quantity}</p>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vegetable;
