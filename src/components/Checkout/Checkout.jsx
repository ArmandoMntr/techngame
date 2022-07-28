import React from "react";
import checkmark from "../../assets/checkmark/checkmark.svg";
import "./Checkout.scss";
const Checkout = ({ id, name }) => {
  return (
    <div className="checkoutWrapper">
      <div className="checkoutTitle">Your order has been received!</div>
      <div className="checkoutImg">
        <img src={checkmark} alt="check" />
      </div>
      <div className="thanksCheckout">
        <h3>Thanks for your purchase Mr./Ms. {name}, your order id is:</h3>
      </div>
      <div className="checkoutId">{id}</div>
    </div>
  );
};

export default Checkout;
