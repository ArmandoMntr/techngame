import React from "react";
import "./ItemList.scss";
import Bag from "../../assets/bag/bag.svg";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ greeting }) => {
  const random = [
    ...new Set(
      Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
    ),
  ];
  return (
    <div className="landing">
      <div className="cardsWrapper">
        {random.map((number) => {
          return (
            <ItemCount
              key={number}
              stock={number}
              //  initial={1}
            />
          );
        })}
        <footer>
          <p>{greeting}</p>
          <img src={Bag} alt="bag for shopping" />
        </footer>
      </div>
    </div>
  );
};

export default ItemList;
