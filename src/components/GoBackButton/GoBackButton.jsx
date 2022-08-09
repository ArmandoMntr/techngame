import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import arrowback from "../../assets/arrowback/arrowback.svg";
import "./GoBackButton.scss";
const GoBackButton = () => {
  return (
    <Link to={"/"}>
      <Button className="goBackButton">
        Go back to products
        <img className="goBackButtonImg" src={arrowback} alt="arrowback" />
      </Button>
    </Link>
  );
};

export default GoBackButton;
