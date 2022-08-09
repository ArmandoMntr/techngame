import React from "react";
import "./Item.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({ img, title, price, id }) => {
  return (
    <Link to={`/product/${id}`} className="detailLink">
      <Card style={{ width: "14rem" }} className="cardItem">
        <Card.Img variant="top" src={img} className="cardImg" />
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Text className="cardStock">${price} USD</Card.Text>
      </Card>
    </Link>
  );
};

export default Item;
