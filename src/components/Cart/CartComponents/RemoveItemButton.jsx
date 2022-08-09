import React from "react";
import { Button } from "react-bootstrap";
import trashCan from "../../../assets/trashIcon/trashcan.svg";
import "../Cart.scss";
const RemoveItemButton = ({ removeItem, id }) => {
  return (
    <Button className="removeItemButtonCart" onClick={() => removeItem(id)}>
      Remove from Cart{" "}
      <img
        src={trashCan}
        className="removeItemButtonImg"
        alt="trash can img"
      ></img>
    </Button>
  );
};

export default RemoveItemButton;
