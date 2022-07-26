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
    handleCart({
      image: image,
      title: name,
      cost: priceTag * (quantity + 1),
      originalPrice: priceTag,
    });
  };

  const decrement = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity(quantity - 1);
    handleCart({
      title: name,
      cost: priceTag * (quantity - 1),
      originalPrice: priceTag,
    });
  };

  return (
    <>
      <div className="vegetable-container" key={index}>
        <div className="veg-description">
          <p className="veg-name">{name}</p>
          <p className="veg-price">{price}</p>
          <p className="veg-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="veg-img-container">
          <img src={image} alt="veggie" />
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
