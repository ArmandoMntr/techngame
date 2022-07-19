import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import bagImg from "../../assets/bag/bag.svg";
import trashCan from "../../assets/trashIcon/trashcan.svg";
import "./Cart.scss";
// import cart from "../../assets/cartIcon/shopping_cart.svg";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const prices = cart.map((item) => {
    return item.quantity !== 1 ? item.item.price * item.quantity : [];
  });

  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
  }
  // console.log(totalPrice);
  // console.log(cart);
  return (
    <div className="cartWrapper">
      <div className="cartTitle">
        <img src={bagImg} alt="bag icon"></img>
        <h3>My Cart</h3>
      </div>
      {cart.length === 0 ? (
        <div className="noItemsMessageCart">
          <p>No items in the cart</p>
        </div>
      ) : (
        <>
          {cart.map((item) => {
            const { id, thumbnail, brand, price, title } = item.item;
            const { quantity } = item;
            return (
              <div className="cartItemContainer">
                <h4 key={id}> {title}</h4>
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
                    <Button
                      className="removeItemButtonCart"
                      onClick={() => removeItem(id)}
                    >
                      Remove from Cart{" "}
                      <img src={trashCan} alt="trash can img"></img>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cartPriceEmpty">
            <p>Total price: ${totalPrice} USD</p>
            <Button className="emptyButtonCart" onClick={() => clearCart()}>
              Empty Cart
            </Button>
          </div>
        </>
      )}

      <Link to={"/"}>
        <Button className="goBackButtonCart">Go back to products</Button>
      </Link>
    </div>
  );
};

export default Cart;
