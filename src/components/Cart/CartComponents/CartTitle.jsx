import React from "react";
import "../Cart.scss";
import bagImg from "../../../assets/bag/bag.svg";
const CartTitle = () => {
  return (
    <div className="cartTitle">
      <img src={bagImg} alt="bag icon"></img>
      <h3>Order Details</h3>
    </div>
  );
};

export default CartTitle;
