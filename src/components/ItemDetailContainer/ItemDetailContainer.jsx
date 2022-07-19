import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import SpinnerLoad from "../SpinerLoad/SpinerLoad";
import data from "../../assets/data/data";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = data.products.find(
          (item) => item.id === parseInt(itemId)
        );

        resolve(myData);
      }, 1);
    });

    getItems
      .then((res) => {
        setDetail(res);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? <SpinnerLoad /> : <ItemDetail detail={detail} />;
};

export default ItemDetailContainer;
