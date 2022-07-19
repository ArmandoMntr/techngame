import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ItemCount from "../../ItemCount/ItemCount";
import "./ItemDetail.scss";
import { CartContext } from "../../../context/cartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const { thumbnail, title, price, stock, description } = detail;
  const { addToCart } = useContext(CartContext);

  const [cartState, setCartState] = useState(false);

  const onAdd = (count) => {
    setCartState(true);
    addToCart(detail, count);
  };

  const continueShopping = () => {
    setCartState(false);
  };
  return (
    <div className="detailWrapper">
      <Card className="detailItem">
        <div className="detailImg">
          <Card.Img variant="top" src={thumbnail} />
        </div>
        <div className="detailContent">
          <Card.Title className="detailTitle">{title}</Card.Title>
          <Card.Text className="detailDescription">{description} </Card.Text>
          <Card.Text className="detailStock">${price} USD</Card.Text>
          <Card.Text className="detailStock">Stock: {stock} </Card.Text>
          {cartState ? (
            <>
              <Link to={"/cart"}>
                <Button className="goToCartButton">Go to Cart</Button>
              </Link>
              <>
                <Button
                  className="continueShoppingButton"
                  onClick={continueShopping}
                >
                  Continue Shopping
                </Button>
              </>
            </>
          ) : (
            <ItemCount stock={stock} onAdd={onAdd} />
          )}
        </div>
      </Card>
    </div>
  );
};

export default ItemDetail;
