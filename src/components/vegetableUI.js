import React, { useState } from "react";

import Vegetable from "./vegetable";
import Cart from "./cart";
import FooterViewCart from "./footerViewCart";

import brinjal from "../VegetableImages/brinjal.jpg";
import carrot from "../VegetableImages/carrot.jpg";
import peas from "../VegetableImages/peas.jpg";
import cucumber from "../VegetableImages/cucumber.jpg";
import potato from "../VegetableImages/potato.jpg";

let xyz = 0;
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
  let [task, addTask] = useState([]); //ann array to render items in cart
  let [bill, showBill] = useState(false);

  const cartOpen = () => {
    showCart(true);
    showBill(true);
  };

  // search list filter
  let displayValue = vegetables.filter((item) => {
    if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  //adds vgetable to cart
  const handleCart = (name) => {
    addTask(() => {
      return [...task, name];
    });
  };
  // removes item from cart
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

  // checks if multiple entries are not added in cart
  // this simple logic almost killed my confidence

  for (let i = 0; i < task.length; i++) {
    for (let j = i + 1; j < task.length; j++) {
      if (task[i].title === task[i + 1].title) {
        let x = task.pop();
        task.pop();
        task.push(x); // for some reasons splice didnt work
        break;
      } else if (task.length > 1 && task[i].title === task[j].title) {
        task.splice(i, i + 1);
        break;
      }
    }
  }

  let i = 0;
  let totalCost = 0;
  while (i < task.length) {
    totalCost += task[i].cost;
    i++;
  }

  let taxValue = (totalCost + totalCost / 10 / 2 - totalCost).toFixed(2);

  let serviceTax = 42;

  return (
    <>
      <header>
        <h1>Veggies</h1>
        <div className="cart" onClick={cartOpen}>
          <p>
            Cart
            <span>Show Cart</span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Search Veggies..."
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          value={inputValue}
        />
      </header>
      <article>
        {displayValue.map((value, index) => {
          // can be rendered in separeate comp
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
        <div className="main-cart">
          <div className="Cart-Overlay">
            <div className="card-title">
              <div>
                <p>My Cart ({task.length})</p>
                <p>
                  Pincode: <b>380015</b>
                </p>
              </div>
              <button
                onClick={() => {
                  showCart(false);
                  showBill(false);
                }}
              >
                X
              </button>
            </div>
            {task.map((value, index) => {
              // can be rendered in separeate comp

              return (
                <Cart
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
      {bill ? (
        <div className="showbill">
          <div>
            <p>Now GET EXTRA 5% OFF with Credit Card. T&C</p>
            <pre>Sub Total:   ₹ {totalCost}</pre>
            <pre>   Tax 5%:  ₹ {taxValue}</pre>
            <pre>  Service:    ₹ {serviceTax}</pre>
          </div>
          <pre>  Total: </pre>
          <pre> ₹ {Math.round(Number(totalCost) + Number(taxValue) + Number(serviceTax))}</pre>
          <p>CHECKOUT</p>
        </div>
      ) : null}
      <FooterViewCart
        length={task.length}
        totalCost={totalCost}
        cartOpen={cartOpen}
      />
    </>
  );
}

export { xyz };
export default VegetableUI;
