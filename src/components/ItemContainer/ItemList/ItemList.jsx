import React from "react";
import "./ItemList.scss";
import Item from "./Item/Item";
const ItemList = ({ data }) => {
  return (
    <div className="landing">
      <div className="cardsWrapper">
        {data &&
          data.map((item) => {
            const { thumbnail, title, stock, id, price } = item;
            return (
              <Item
                img={thumbnail}
                title={title}
                stock={stock}
                key={id}
                id={id}
                price={price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
