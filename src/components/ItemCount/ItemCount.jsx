import React, { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
// import Rocket from "../../assets/rocket/rocket.svg";
import "./ItemCount.scss";
const ItemCount = ({ stock, handleCount }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    count < stock ? setCount(count + 1) : setCount(stock);
  };

  const onSubstract = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  const disabledMinus = () => {
    return count === 1 ? true : false;
  };

  const disabledPlus = () => {
    return count === stock ? true : false;
  };

  return (
    <>
      <Card>
        <Card.Body>
          {/* <Card.Title>Item</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Text> */}
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Button
                onClick={onSubstract}
                disabled={disabledMinus()}
                variant="light"
              >
                -
              </Button>{" "}
              <Button variant="light">{count}</Button>{" "}
              <Button onClick={onAdd} disabled={disabledPlus()} variant="light">
                +
              </Button>{" "}
            </ListGroup.Item>
          </ListGroup>
          <Button onClick={handleCount(count)}>Add to Cart</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Stock: {stock} (ver consola)</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ItemCount;
