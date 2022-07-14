import React, { useState } from "react";

const CartContext = React.createContext({
  items: [{}],
  addItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    setItems(item);
    console.log(items);
    // console.log(items);
  };
  return (
    <CartContext.Provider value={{ items: items, addItem: addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
