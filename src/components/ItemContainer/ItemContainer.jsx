import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import LoadingTitle from "../LoadingTitle/LoadingTitle";

import { useParams } from "react-router-dom";
import data from "../../assets/data/data";

const ItemContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { params } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = params
          ? data.products.filter((item) => item.category === params)
          : data.products;

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [params]);

  return loading ? <LoadingTitle /> : <ItemList data={items} />;
};

export default ItemContainer;
