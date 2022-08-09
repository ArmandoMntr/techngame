// import { Form } from "react-bootstrap";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import Checkout from "../Checkout/Checkout";

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

{
  /* <Checkout id={orderId} name={name} /> */
}
{
  /* <Link to={"/"}>
          <Button className="goBackButtonCart">Go back to products</Button>
        </Link> */
}

{
  /* <div className="checkoutForm">
                  <h3>Please enter your contact info:</h3>
                  <Form onsubmit>
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
                </div> */
}
