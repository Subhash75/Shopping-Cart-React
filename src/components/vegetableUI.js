import React, { useState } from "react";

import Vegetable from "./vegetable";
import Cart from "./cart";
import brinjal from "../VegetableImages/brinjal.jpg";
import carrot from "../VegetableImages/carrot.jpg";
import peas from "../VegetableImages/peas.jpg";
import cucumber from "../VegetableImages/cucumber.jpg";
import potato from "../VegetableImages/potato.jpg";

function VegetableUI() {
  const vegetables = [
    { name: "Brinjal", price: "₹65kg", img: brinjal },
     { name: "Carrot", price: "₹70kg", img: carrot },
     { name: "Peas", price: "₹30kg", img: peas },
     { name: "Cucumber", price: "₹55kg", img: cucumber },
     { name: "Potato", price: "₹45kg", img: potato },
    // { name: "Tomato", price: "₹50kg" },
    // { name: "Apple", price: "₹130kg" },
    // { name: "Onion", price: "₹80kg" },
    // { name: "Cabbage", price: "₹50kg" },
    // { name: "Beans", price: "₹100kg" },
  ];

  let [inputValue, setInputValue] = useState(""); //for input value
  let [cart, showCart] = useState(false); //for showing/ hiding cart
  let [task, addTask] = useState([]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  let displayValue = vegetables.filter((item, index) => {
    if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return "dsfdf";
    }
    return null;
  });

  const displayCart = () => {
    showCart(true);
  };

  const handleCart = (name) => {
    addTask(() => {
      return [...task, name];
    });
  };

  const remove = (key) => {
    addTask(() =>
      task.filter((value, index) => {
        if (key !== index) {
          return value;
        }
        return null;
      })
    );
  };

  return (
    <>
      <header>
        <h1>Veggies</h1>
        <div className="cart" onClick={displayCart}>
          <p>
            Cart
            <span>Show Cart</span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Search Veggies..."
          onChange={handleInput}
          value={inputValue}
        />
      </header>
      <article>
        {displayValue.map((value, index) => {
          return (
            <Vegetable
              name={value.name}
              price={value.price}
              image={value.img}
              key={index}
              handleCart={handleCart}
            />
          );
        })}
      </article>

      {cart ? (
        <div className="Cart-Overlay">
          {task.map((value, index) => {
            return (
              <Cart
                name={value.title}
                price={value.cost}
                key={index}
                index={index}
                remove={remove}
              />
            );
          })}
          <button onClick={() => showCart(false)}>X</button>
        </div>
      ) : null}
    </>
  );
}

export default VegetableUI;
