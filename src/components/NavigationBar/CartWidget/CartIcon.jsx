import React, { useContext } from "react";
import "./CartIcon.scss";
import CartPng from "../../../assets/cartIcon/shopping_cart.svg";
import { CartContext } from "../../../context/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cartIconWrapper">
      {cart.totalQuantity > 0 ? (
        <span className="itemCountIcon ">{cart.totalQuantity}</span>
      ) : null}
      <img src={CartPng} alt="shopping cart" />
    </div>
  );
};

export default Cart;
