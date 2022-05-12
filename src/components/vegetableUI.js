import React, { useState } from "react";
import Vegetable from "./vegetable";
import Cart from "./cart";

function VegetableUI() {
  
  const vegetables = [
    "Brinjal",
    "Carrot",
    "Peas",
    "Cucumber",
    "Potato",
    "Tomato",
    "Apple",
    "Onion",
    "Cabbage",
    "Beans",
  ];
  
  let [value, setValue] = useState(""); //for input value
  let [cart, showCart] = useState(false); //for showing/ hiding cart
  let [task, addTask] = useState([]);
  let [mnop, setmnop] = useState("");

  const myFun = (event) => {
    setValue(event.target.value);
  };

  let displayValue = vegetables.filter((item) => {
    if (item.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

  const displayCart = () => {
    showCart(true);
  };

  const handleCart = (name) => {
    setmnop(name);
    addTask(() => {
      return [...task, name]
    })
  };

  const remove = (key) => {
  addTask(() => task.filter((value, index) => {
    if(key !== index) {
      return value;
    }
  }))
  }

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
          onChange={myFun}
          value={value}
        />
      </header>
      <article>
        {displayValue.map((value, index) => {
          return <Vegetable name={value} key={index} handleCart={handleCart} />;
        })}
      </article>

      {cart ? (
        <div className="Cart-Overlay">
          {task.map((value, index) => {
            return <Cart name={value} key={index} index={index} remove={remove} />
          })}
          <button onClick={() => showCart(false)}>X</button>
        </div>
      ) : null}
    </>
  );
}

export default VegetableUI;
