import { createContext, useState } from "react";
export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartContextProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState({
    cartContent: defaultValue,
    totalQuantity: 0,
    totalPrice: 0,
  });

  const clearCart = () => {
    setCart([]);
  };

  const countTotalQuantity = (cart) => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const countTotalPrice = (cart) => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.item.price;
    });
    return totalPrice;
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = [...cart.cartContent];
      newCart.forEach((element) => {
        if (element.item.id === item.id) {
          element.quantity = element.quantity + quantity;
        }
      });
      setCart({
        cartContent: newCart,
        totalQuantity: countTotalQuantity(newCart),
        totalPrice: countTotalPrice(newCart),
      });
    } else {
      setCart({
        cartContent: [...cart.cartContent, { item: item, quantity: quantity }],
        totalQuantity: cart.totalQuantity + quantity,
        totalPrice: cart.totalPrice + item.price * quantity,
      });
    }
  };

  const isInCart = (id) => {
    return cart.cartContent.find((element) => element.item.id === id);
  };

  const removeItem = (id) => {
    const newCart = [...cart.cartContent].filter(
      (element) => element.item.id !== id
    );
    setCart({
      cartContent: newCart,
      totalQuantity: countTotalQuantity(newCart),
      totalPrice: countTotalPrice(newCart),
    });
  };

  const context = {
    cart,
    clearCart,
    addToCart,
    removeItem,
  };

  return <Provider value={context}>{children}</Provider>;
};
