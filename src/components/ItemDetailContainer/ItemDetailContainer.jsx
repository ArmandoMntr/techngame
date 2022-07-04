import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import SpinnerLoad from "../SpinerLoad/SpinerLoad";
const ItemDetailContainer = () => {
  const [detail, setDetail] = useState();
  const getItem = () => {
    setTimeout(() => {
      fetch("data.json")
        .then((data) => data.json())
        .then((items) => setDetail(items.products))
        .catch((err) => console.log(err));
    }, 2000);
  };

  useEffect(() => {
    getItem();
  }, []);

  return detail === undefined ? (
    <SpinnerLoad />
  ) : (
    <ItemDetail detail={detail[0]} />
  );
};

export default ItemDetailContainer;
