import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
// import Rocket from "../../assets/rocket/rocket.svg";
import "./ItemCount.scss";
const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
    console.log("onAdd function called");
  };

  const onSubstract = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
    console.log("onSubstract function called");
  };

  return (
    <>
      <Card>
        {/* <Card.Img variant="top" src={Rocket} /> */}
        <Card.Body>
          <Card.Title>Item</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button
                onClick={onSubstract}
                disabled={count === 1 ? true : false}
                variant="light"
              >
                -
              </Button>{" "}
              <Button variant="light">{count}</Button>{" "}
              <Button
                onClick={onAdd}
                disabled={count === stock ? true : false}
                variant="light"
              >
                +
              </Button>{" "}
            </ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Stock: {stock}</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ItemCount;
