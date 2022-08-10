import React, { useContext } from "react";
import "./OrderComplete.scss";
import checkmark from "../../../assets/checkmark/checkmark.svg";
import { CheckoutContext } from "../../../context/checkoutContext";
import GoBackButton from "../../GoBackButton/GoBackButton";
const OrderComplete = () => {
  const { orderId, name } = useContext(CheckoutContext);
  return (
    <div className="checkoutWrapper">
      <div className="checkoutTitle">Your order has been received!</div>
      <div className="checkoutImg">
        <img src={checkmark} alt="check" />
      </div>
      <div className="thanksCheckout">
        <h3 className="thanksCheckoutText">
          Thanks for your purchase Mr./Ms. {name}, your order id is:{" "}
          <span className="orderIdCheckout">{orderId}.</span>
          You will receive an email with more details shortly.
        </h3>
        <GoBackButton />
      </div>
    </div>
  );
};

export default OrderComplete;
