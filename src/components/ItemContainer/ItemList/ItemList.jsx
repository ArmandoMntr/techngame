import React from "react";
import "./ItemList.scss";
import Item from "./Item/Item";
const ItemList = ({ data }) => {
  return (
    <div className="landing">
      <div className="cardsWrapper">
        {data &&
          data.map((item) => {
            const {
              thumbnail,
              title,
              /* description, */
              stock,
              id,
              price,
            } = item;
            return (
              <Item
                img={thumbnail}
                title={title}
                // description={description}
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
