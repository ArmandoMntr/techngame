import React from "react";
import "./Cart.scss";
import cart from "../../assets/cartIcon/shopping_cart.svg";
const Cart = () => {
  return (
    <div className="main">
      <h1>Este es el carrito</h1>
      <img src={cart} alt="cart" />
    </div>
  );
};

export default Cart;
