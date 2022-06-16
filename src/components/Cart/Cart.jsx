import React from "react";
import "./Cart.scss";
import CartPng from "../../assets/cartIcon/shopping_cart.svg";
const Cart = () => {
  return (
    <a href="#cart">
      <img src={CartPng} alt="shopping cart" />
    </a>
  );
};

export default Cart;
