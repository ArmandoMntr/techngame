import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import ItemList from "./components/ItemList/ItemList";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => {
  return (
    <>
      <NavigationBar />
      <ItemList greeting={"Here will be more items"} />
    </>
  );
};

export default App;
