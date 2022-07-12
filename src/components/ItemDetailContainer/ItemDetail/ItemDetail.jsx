import React, { useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemDetail.scss";
const ItemDetail = ({ detail }) => {
  const [count, setCount] = useState(1);

  const handleCount = (count) => {
    setCount(count);
    console.log("estado del counter en itemDetail " + count);
  };
  return (
    <>
      <div>
        <div className="card">
          <div className="title">
            <h1>{detail.title}</h1>
          </div>
          <div className="content">
            <h2 className="detail">
              <span>Price:</span> {detail.price}
            </h2>
            <h2 className="detail">
              <span>Rating:</span> {detail.rating}
            </h2>
            <h2 className="detail">
              <span>Brand:</span> {detail.brand}
            </h2>
            <h2 className="detail">
              <span>description:</span> {detail.description}
            </h2>
          </div>
          <div className="circle"></div>
          <div className="imgWrapper">
            <img src={detail.thumbnail} alt={detail.title}></img>
          </div>
        </div>
        {count === 1 ? (
          <ItemCount stock={detail.stock} handleCount={handleCount} />
        ) : (
          <Card>
            <Link to={`/cart`}>
              <Button className="checkoutButton">Checkout (ver consola)</Button>
            </Link>
          </Card>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
