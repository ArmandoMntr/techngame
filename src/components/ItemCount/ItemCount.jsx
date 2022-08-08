import React, { useState } from "react";
import { Button } from "react-bootstrap";
import cartImg from "../../assets/cartIcon/shopping_cart.svg";
import "./ItemCount.scss";
const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const addHandler = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
  };

  const removeHandler = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  const disabledMinus = () => {
    return count === 1 ? true : false;
  };

  const disabledPlus = () => {
    return count === stock ? true : false;
  };

  return (
    <>
      <div className="counterWrapper">
        <div className="counterButtons">
          <Button
            className="counterButton"
            onClick={removeHandler}
            disabled={disabledMinus()}
            variant="light"
          >
            <span>-</span>
          </Button>
          <Button variant="light" className="counterButton">
            <span>{count}</span>
          </Button>
          <Button
            className="counterButton"
            onClick={addHandler}
            disabled={disabledPlus()}
            variant="light"
          >
            <span>+</span>
          </Button>
        </div>
        <Button onClick={() => onAdd(count)} className="addToCartButton">
          Add to Cart
          <img src={cartImg} alt="shopping cart img" />
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
