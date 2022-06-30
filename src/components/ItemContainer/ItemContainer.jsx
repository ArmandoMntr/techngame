import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import LoadingTitle from "../LoadingTitle/LoadingTitle";
const ItemContainer = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json")
        //using dummyjson.com/products for now
        .then((data) => data.json())
        .then((data) => setItems(data.products))
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  // return <LoadingTitle />;
  return items === undefined ? <LoadingTitle /> : <ItemList data={items} />;

  // return <ItemList data={items} />;
};

export default ItemContainer;
