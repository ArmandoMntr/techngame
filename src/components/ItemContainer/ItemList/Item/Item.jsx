import React from "react";
import "./Item.scss";
import { Card, Button } from "react-bootstrap";
const Item = ({ img, title, description, stock }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text className="cardStock">Stock : {stock}</Card.Text>
        <Button variant="primary">More details</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
