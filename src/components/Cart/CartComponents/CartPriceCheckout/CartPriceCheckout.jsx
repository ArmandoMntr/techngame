import React, { useContext } from "react";
import { CheckoutContext } from "../../../../context/checkoutContext";
import "./CartPriceCheckout.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartPriceEmptyCheckcout = ({ price }) => {
  const { changeCheckout } = useContext(CheckoutContext);
  return (
    <div className="cartPriceCheckout">
      <p>Total price: ${price} USD</p>
      <Link to={"/checkout"}>
        <Button onClick={() => changeCheckout()}>Proceed to checkout</Button>
      </Link>
    </div>
  );
};

export default CartPriceEmptyCheckcout;
