import React, { useState } from "react";

import Vegetable from "./vegetable";
import Header from "./header";
import Cart from "./cart";
import Bill from "./bill";
import FooterViewCart from "./footerViewCart";

import brinjal from "../VegetableImages/brinjal.jpg";
import carrot from "../VegetableImages/carrot.jpg";
import peas from "../VegetableImages/peas.jpg";
import cucumber from "../VegetableImages/cucumber.jpg";
import potato from "../VegetableImages/potato.jpg";
import tomato from "../VegetableImages/tomato.jpg";
import apple from "../VegetableImages/apple.jpg";
import onion from "../VegetableImages/onion.jpg";
import cabbage from "../VegetableImages/cabbage.jpg";
import beans from "../VegetableImages/beans.jpg";


function VegetableUI() {
  const vegetables = [
    { name: "Brinjal", price: "₹65kg", img: brinjal },
    { name: "Carrot", price: "₹70kg", img: carrot },
    { name: "Peas", price: "₹30kg", img: peas },
    { name: "Cucumber", price: "₹55kg", img: cucumber },
    { name: "Potato", price: "₹45kg", img: potato },
    { name: "Tomato", price: "₹50kg", img: tomato },
    { name: "Apple", price: "₹130kg", img: apple },
    { name: "Onion", price: "₹80kg", img: onion },
    { name: "Cabbage", price: "₹50kg", img: cabbage },
    { name: "Beans", price: "₹100kg", img: beans },
  ];

  let [inputValue, setInputValue] = useState(""); //for input value
  let [cart, showCart] = useState(false); //for showing/ hiding cart
  let [addToCart, setAddToCart] = useState([]); //an array to render items in cart
  let [bill, showBill] = useState(false);

  const openTheCart = () => {
    showCart(true);
    showBill(true);
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  // search list filter
  let searchFilter = vegetables.filter((item) => {
    if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  const closeCart = () => {
    showCart(false);
    showBill(false);
  };

  //adds vgetable to cart
  const handleCart = (name) => {
    setAddToCart(() => {
      return [...addToCart, name];
    });
  };
  // removes item from cart
  const remove = (key) => {
    setAddToCart(() =>
    addToCart.filter((value, index) => {
        if (key !== index) {
          return value;
        }
        return null;
      })
    );
  };

  // checks if multiple entries are not added in cart

  for (let i = 0; i < addToCart.length; i++) {
    for (let j = i + 1; j < addToCart.length; j++) {
      if (addToCart[i].title === addToCart[i + 1].title) {
        let x = addToCart.pop();
        addToCart.pop();
        addToCart.push(x); // for some reasons splice didnt work
        break;
      } else if (addToCart.length > 1 && addToCart[i].title === addToCart[j].title) {
        addToCart.splice(i, i + 1);
        break;
      }
    }
  }

  let i = 0;
  let totalCost = 0;
  while (i < addToCart.length) {
    totalCost += addToCart[i].cost;
    i++;
  }

  let taxValue = (totalCost + totalCost / 10 / 2 - totalCost).toFixed(2);

  let serviceTax = 42;

  return (
    <>
      <Header
        inputValue={inputValue}
        openTheCart={openTheCart}
        handleInput={handleInput}
      />

      <article>
        {searchFilter.map((value, index) => {
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

      <Cart
        cart={cart}
        length={addToCart.length}
        closeCart={closeCart}
        addToCart={addToCart}
        remove={remove}
      />

      <Bill  bill={bill} totalCost={totalCost} taxValue={taxValue} serviceTax={serviceTax}  />
     
      <FooterViewCart
        length={addToCart.length}
        totalCost={totalCost}
        openTheCart={openTheCart}
      />
    </>
  );
}


export default VegetableUI;
