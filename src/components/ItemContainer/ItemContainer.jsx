import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import LoadingTitle from "../LoadingTitle/LoadingTitle";
import { useParams } from "react-router-dom";
import { getAllProducts, getItemsByCategory } from "../../services/firestore";

const ItemContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { params } = useParams();

  useEffect(() => {
    const myData = params ? getItemsByCategory(params) : getAllProducts();
    myData
      .then((data) => {
        setLoading(false);
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params]);

  return loading ? <LoadingTitle /> : <ItemList data={items} />;
};

export default ItemContainer;
