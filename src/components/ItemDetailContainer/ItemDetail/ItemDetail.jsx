import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import "./ItemDetail.scss";
const ItemDetail = ({ detail }) => {
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
        <ItemCount />
      </div>
    </>
  );
};

export default ItemDetail;
