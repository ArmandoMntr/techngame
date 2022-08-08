import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import bagImg from "../../assets/bag/bag.svg";
import trashCan from "../../assets/trashIcon/trashcan.svg";
import "./Cart.scss";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  // const [checkOut, setCheckOut] = useState(false);

  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");

  // const [orderId, setOrderId] = useState("");

  // const namehandler = (e) => {
  //   setName(e.target.value);
  // };
  // const phonehandler = (e) => {
  //   setPhone(e.target.value);
  // };
  // const emailhandler = (e) => {
  //   setEmail(e.target.value);
  //   console.log(email);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const buyer = {
  //     name: name,
  //     phone: phone,
  //     email: email,
  //   };
  //   const order = {
  //     buyer: buyer,
  //     items: cart,
  //     totalPrice: totalPrice,
  //     date: new Date().toLocaleDateString(),
  //   };
  //   const db = getFirestore();
  //   const ordersCollection = collection(db, "orders");
  //   addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  //   setCheckOut(true);
  //   console.log("form submited");
  //   console.log("id", orderId);
  //   console.log(order, "order");
  // };

  return (
    <div className="cartWrapper">
      {/* <Checkout id={orderId} name={name} /> */}
      {/* <Link to={"/"}>
          <Button className="goBackButtonCart">Go back to products</Button>
        </Link> */}

      <>
        <div className="cartTitle">
          <img src={bagImg} alt="bag icon"></img>
          <h3>Order Details</h3>
        </div>
        {cart.cartContent.length === 0 ? (
          <div className="noItemsMessageCart">
            <p>No items in the cart</p>
          </div>
        ) : (
          <>
            {cart.cartContent.map((item) => {
              const { id, thumbnail, brand, price, title } = item.item;
              const { quantity } = item;
              return (
                <div className="cartItemContainer" key={id}>
                  <h4 key={title}> {title}</h4>
                  <div className="cartItemDetail">
                    <div className="cartItemImg">
                      <img src={thumbnail} alt="product"></img>
                    </div>
                    <div className="cartItemContent">
                      <span>
                        <p key={brand}>Brand: {brand}</p>
                      </span>
                      <p key={quantity}>Quantity: {quantity}</p>
                      <p key={price}>Price: ${price} USD / unit</p>
                      <Button
                        className="removeItemButtonCart"
                        onClick={() => removeItem(id)}
                      >
                        Remove from Cart{" "}
                        <img src={trashCan} alt="trash can img"></img>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="cartPriceEmpty">
              <p>Total price: ${cart.totalPrice} USD</p>
              {/* <div className="checkoutForm">
                  <h3>Please enter your contact info:</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={namehandler}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={emailhandler}
                        required
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        onChange={phonehandler}
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="checkoutButton"
                      onClick={submitHandler}
                    >
                      Buy Cart
                    </Button>
                  </Form>
                </div> */}
              <Button className="emptyButtonCart" onClick={() => clearCart()}>
                Empty Cart
              </Button>
            </div>
          </>
        )}
        <Link to={"/"}>
          <Button className="goBackButtonCart">Go back to products</Button>
        </Link>
      </>
    </div>
  );
};

export default Cart;
