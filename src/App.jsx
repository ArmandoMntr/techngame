import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ItemContainer from "./components/ItemContainer/ItemContainer";

const App = () => {
  return (
    <>
      <NavigationBar />
      <ItemContainer />
    </>
  );
};

export default App;
