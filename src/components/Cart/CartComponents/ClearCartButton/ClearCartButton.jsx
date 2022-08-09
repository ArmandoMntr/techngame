import React from "react";
import { Button } from "react-bootstrap";
import "./ClearCartButton.scss";

const ClearCartButton = ({ clearCartFn }) => {
  return (
    <div className="clearCartWrapper">
      <Button className="clearCartButton" onClick={() => clearCartFn()}>
        Clear Cart
      </Button>
    </div>
  );
};

export default ClearCartButton;
