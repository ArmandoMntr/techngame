import React from "react";
import "./Cart.scss";
import cart from "../../assets/cartIcon/shopping_cart.svg";
const Cart = () => {
  return (
    <div className="main">
      <h1>This is the cart</h1>
      <p>
        Ver las herramientas de desarollo de React para ver el estado del
        CartContextProvider con el carrito
      </p>
      <img src={cart} alt="cart" />
    </div>
  );
};

export default Cart;
