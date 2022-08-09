import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import LoadingTitle from "../LoadingTitle/LoadingTitle";
import { useParams } from "react-router-dom";
import { getItemById } from "../../services/firestore";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getItemById(itemId)
      .then((data) => {
        setDetail(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, [itemId]);

  return loading ? <LoadingTitle /> : <ItemDetail detail={detail} />;
};

export default ItemDetailContainer;
