import React from 'react'

function Bill({ bill, totalCost, taxValue, serviceTax }) {
  return (
    <>
      {bill ? (
        <div className="showbill">
          <div>
            <p>Now GET EXTRA 5% OFF with Credit Card. T&C</p>
            <pre>Sub Total: ₹ {totalCost}</pre>
            <pre> Tax 5%: ₹ {taxValue}</pre>
            <pre> Service: ₹ {serviceTax}</pre>
          </div>
          <pre> Total: </pre>
          <pre>
            {" "}
            ₹{" "}
            {totalCost !== 0 ? Math.round(
              Number(totalCost) + Number(taxValue) + Number(serviceTax)
            ) : 0}
          </pre>
          <p>CHECKOUT</p>
        </div>
      ) : null}
    </>
  )
}

export default Bill