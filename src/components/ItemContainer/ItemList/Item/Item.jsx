import React from "react";
import "./Item.scss";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({
  img,
  title,
  //  description
  stock,
  id,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>{description}</Card.Text> */}
        <Card.Text className="cardStock">Stock : {stock}</Card.Text>
        <Link to={`/product/${id}`}>
          <Button variant="primary">More details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
