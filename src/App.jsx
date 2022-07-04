import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavigationBar />
      <ItemDetailContainer />
      <ItemContainer />
    </>
  );
};

export default App;
