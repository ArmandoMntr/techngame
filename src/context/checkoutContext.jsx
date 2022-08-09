import { createContext, useState, useContext } from "react";
import { placeOrder } from "../services/firestore";
import { CartContext } from "./cartContext";
export const CheckoutContext = createContext({});
const { Provider } = CheckoutContext;
export const CheckoutContextProvider = ({ children }) => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const formatCart = () => {
    const newCart = [...cart.cartContent];
    const formattedCart = newCart.map((item) => {
      const { brand, price, title } = item.item;
      const { quantity } = item;
      return {
        brand,
        price,
        title,
        quantity,
      };
    });
    return formattedCart;
  };

  const [checkout, setCheckout] = useState(false);

  const changeCheckout = () => {
    setCheckout(false);
  };

  const namehandler = (e) => {
    setName(e.target.value);
  };
  const phonehandler = (e) => {
    setPhone(e.target.value);
  };
  const emailhandler = (e) => {
    setEmail(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();

    const buyer = {
      name: name,
      phone: phone,
      email: email,
    };
    const order = {
      buyer: buyer,
      items: formatCart(),
      totalPrice: cart.totalPrice,
      date: new Date().toLocaleDateString(),
    };
    placeOrder(order);
    clearCart();
    setCheckout(true);
  };

  const context = {
    namehandler,
    phonehandler,
    emailhandler,
    checkout,
    submithandler,
    changeCheckout,
  };

  return <Provider value={context}>{children}</Provider>;
};
