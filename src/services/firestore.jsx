import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMm0rUQu6Xl7vkNH10avzPHxIHapbexjA",
  authDomain: "techngames-c3efb.firebaseapp.com",
  projectId: "techngames-c3efb",
  storageBucket: "techngames-c3efb.appspot.com",
  messagingSenderId: "209545331016",
  appId: "1:209545331016:web:6e31fa8567d1017279737d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productCollectionRef = collection(db, "products");

export const getAllProducts = async () => {
  const docSnapshot = await getDocs(productCollectionRef);
  const dataProducts = docSnapshot.docs.map((item) => {
    const data = { ...item.data(), id: item.id };
    return data;
  });
  return dataProducts;
};

export const getItemsByCategory = async (category) => {
  const q = query(productCollectionRef, where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const dataProducts = querySnapshot.docs.map((item) => {
    const data = { ...item.data(), id: item.id };
    return data;
  });

  return dataProducts;
};

export const getItemById = async (id) => {
  const docRef = doc(productCollectionRef, id);
  const docSnapshot = await getDoc(docRef);
  const data = { ...docSnapshot.data(), id: docSnapshot.id };
  return data;
};
