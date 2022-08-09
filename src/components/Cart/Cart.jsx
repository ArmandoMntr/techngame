import React, { useContext } from "react";
import CartTitle from "./CartComponents/CartTitle";
import "./Cart.scss";
import { CartContext } from "../../context/cartContext";
import NoItemsMessage from "./CartComponents/NoItemsMessage";
import GoBackButton from "../GoBackButton/GoBackButton";
import CartPriceEmptyCheckcout from "./CartComponents/CartPriceCheckout/CartPriceCheckout";
import RemoveItemButton from "./CartComponents/RemoveItemButton";
import ClearCartButton from "./CartComponents/ClearCartButton/ClearCartButton";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="cartWrapper">
      <>
        <CartTitle />
        {cart.cartContent.length === 0 ? (
          <NoItemsMessage />
        ) : (
          <>
            <ClearCartButton clearCartFn={clearCart} />
            {cart.cartContent.map((item) => {
              const { id, thumbnail, brand, price, title } = item.item;
              const { quantity } = item;
              return (
                <div className="cartItemContainer" key={id}>
                  <h4 key={title}> {title}</h4>
                  <div className="cartItemDetail">
                    <div className="cartItemImg">
                      <img src={thumbnail} alt="product"></img>
                    </div>
                    <div className="cartItemContent">
                      <span>
                        <p key={brand}>Brand: {brand}</p>
                      </span>
                      <p key={quantity}>Quantity: {quantity}</p>
                      <p key={price}>Price: ${price} USD / unit</p>
                      <RemoveItemButton removeItem={removeItem} id={id} />
                    </div>
                  </div>
                </div>
              );
            })}
            <CartPriceEmptyCheckcout price={cart.totalPrice} />
          </>
        )}
        <GoBackButton />
      </>
    </div>
  );
};

export default Cart;
