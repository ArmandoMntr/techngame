import React from "react";
import "./ItemList.scss";
import Bag from "../../assets/bag/bag.svg";
const ItemList = ({ greeting }) => {
  return (
    <div className="landing">
      <p>{greeting}</p>
      <img src={Bag} alt="bag for shopping" />
    </div>
  );
};

export default ItemList;
