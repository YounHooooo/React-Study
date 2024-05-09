import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="card-wrap">
      <img src={item?.img} />
      <div className="card-content">
        <div>{item?.choice == true ? "Conscious choice" : ""}</div>
        <strong>{item?.title}</strong>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "신제품" : ""}</div>
        <strong>{item?.soldout == true ? "soldout" : ""}</strong>
      </div>
    </div>
  );
};

export default ProductCard;
