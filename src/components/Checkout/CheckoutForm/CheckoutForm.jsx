import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { CheckoutContext } from "../../../context/checkoutContext";
import "./CheckoutOrder.scss";
const CheckoutForm = () => {
  const { namehandler, phonehandler, emailhandler, submithandler } =
    useContext(CheckoutContext);

  return (
    <div className="checkoutForm">
      <h4>Please enter your contact info</h4>
      <Form onSubmit={submithandler}>
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

        <Button type="submit" className="checkoutButton">
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutForm;
