import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import Checkout from "./components/Checkout/Checkout";
import { CheckoutContextProvider } from "./context/checkoutContext";
const App = () => {
  return (
    <CartContextProvider>
      <CheckoutContextProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<ItemContainer />} />
            <Route path="/category/:params" element={<ItemContainer />} />
            <Route path="/product/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CheckoutContextProvider>
    </CartContextProvider>
  );
};

export default App;
