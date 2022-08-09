import React, { useContext } from "react";
import "./Checkout.scss";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutOrder from "./CheckoutForm/CheckoutOrder/CheckoutOrder";
import { CheckoutContext } from "../../context/checkoutContext";
import GoBackButton from "../GoBackButton/GoBackButton";
const Checkout = () => {
  const { checkout } = useContext(CheckoutContext);

  return (
    <>
      {checkout ? (
        <h1>checkoutfalso</h1>
      ) : (
        <div className="checkoutWrapper">
          <GoBackButton />
          <div className="checkoutTitle">
            <h1>Checkout</h1>
          </div>
          <div className="checkoutDetails">
            <CheckoutOrder />
            <CheckoutForm />
          </div>
        </div>
      )}
    </>
    // <div className="checkoutWrapper">
    //   <div className="checkoutTitle">Your order has been received!</div>
    //   <div className="checkoutImg">
    //     <img src={checkmark} alt="check" />
    //   </div>
    //   <div className="thanksCheckout">
    //     <h3>Thanks for your purchase Mr./Ms. {name}, your order id is:</h3>
    //   </div>
    //   <div className="checkoutId">{id}</div>
    // </div>
  );
};

export default Checkout;
