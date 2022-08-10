import React, { useContext } from "react";
import "./Checkout.scss";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import CheckoutOrder from "./CheckoutForm/CheckoutOrder/CheckoutOrder";
import { CheckoutContext } from "../../context/checkoutContext";
import GoBackButton from "../GoBackButton/GoBackButton";
import OrderComplete from "./OrderComplete/OrderComplete";
const Checkout = () => {
  const { checkout } = useContext(CheckoutContext);

  return (
    <>
      {checkout ? (
        <OrderComplete />
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
  );
};

export default Checkout;
