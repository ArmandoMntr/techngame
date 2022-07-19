import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "./Cart.scss";
// import cart from "../../assets/cartIcon/shopping_cart.svg";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  const prices = cart.map((item) => {
    // if (item.quantity !== 1) {
    //   return item.item.price * item.quantity;
    // } else {
    //   return 0;
    // }
    return item.quantity !== 1 ? item.item.price * item.quantity : [];
  });

  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
  }
  console.log(totalPrice);
  console.log(cart);
  return (
    <div>
      <p>Cart Title</p>
      {cart.length === 0 ? (
        <p>Sin items en el carrito</p>
      ) : (
        <>
          {cart.map((item) => {
            return (
              <div className="cartItemContainer">
                <p key={item.item.id}>Item: {item.item.title}</p>
                <p key={item.quantity}>Quantity: {item.quantity}</p>
                <p key={item.item.price}>Price: {item.item.price}</p>
                <Button onClick={() => removeItem(item.item.id)}>
                  Eliminar item
                </Button>
              </div>
            );
          })}

          <p>Total price: {totalPrice}</p>
          <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
        </>
      )}

      <Link to={"/"}>
        <Button>Regresar a los productos</Button>
      </Link>
    </div>
  );
};

export default Cart;
