import React from "react";
import { CartContext } from "../../../../context/cartContext";
import { useContext } from "react";
import "../../Checkout.scss";
const CheckoutOrder = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="checkoutOrder">
      <h3 className="checkoutOrderTitle">Your Order</h3>
      <div className="checkoutOrderSubtitles">
        <p className="checkoutSubtitleText">Product</p>
        <p className="checkoutSubtitleText">Subtotal</p>
      </div>
      <div className="checkoutColumns">
        {cart.cartContent.map((item) => {
          const { title, price, id } = item.item;
          const { quantity } = item;
          return (
            <div className="checkoutColumns2" key={id}>
              <h6 className="checkoutColsTitle">
                {title} <span>x {quantity}</span>
              </h6>
              <h6 className="checkoutColsPrice">$ {price * quantity} USD</h6>
            </div>
          );
        })}
        <div className="checkoutColumns2">
          <p className="checkoutTotalPrice">Total </p>
          <p className="checkoutTotalPrice">$ {cart.totalPrice} USD</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrder;
