import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import LoadingTitle from "../LoadingTitle/LoadingTitle";

import { useParams } from "react-router-dom";
import data from "../../assets/data/data";

import {
  doc,
  getFirestore,
  getDoc,
  collection,
  getDocs,
  snapshotEqual,
} from "firebase/firestore";

const ItemContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { params } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   const getItems = new Promise((resolve) => {
  //     setTimeout(() => {
  //       const myData = params
  //         ? data.products.filter((item) => item.category === params)
  //         : data.products;

  //       resolve(myData);
  //     }, 1);
  //   });

  //   getItems
  //     .then((res) => {
  //       setItems(res);
  //     })
  //     .finally(() => setLoading(false));
  // }, [params]);

  useEffect(() => {
    const db = getFirestore();
    //one item
    // const productRef = doc(db, "products", "3kwVMFdMwUMKojIERS7I");
    // getDoc(productRef).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     setItems([snapshot.data()]);
    //   }
    // });
    //multiple items
    setLoading(true);
    const productRef = collection(db, "products");
    const getItems = new Promise((resolve) => {
      const products = getDocs(productRef).then((snapshot) => {
        snapshot.docs.map((doc) => doc.data());
      });
      const myData = params
        ? products.filter((item) => item.category === params)
        : products;
      resolve(myData);

      getItems
        .then((response) => {
          setItems(response);
        })
        .finally(setLoading(false));
    });

    // const productRef = collection(db, "products");
    // getDocs(productRef).then((snapshot) => {
    //   setItems(snapshot.docs.map((doc) => doc.data()));
    // });
  }, [params]);

  return loading ? <LoadingTitle /> : <ItemList data={items} />;
};

export default ItemContainer;
