import React from 'react'

function Header({ openTheCart, handleInput, inputValue }) {
  return (
    <>
      <header>
        <h1>Veggies</h1>
        <div className="cart" onClick={openTheCart}>
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
    </>
  )
}

export default Header