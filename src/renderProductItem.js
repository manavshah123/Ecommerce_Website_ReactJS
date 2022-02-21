import React from "react";

export default function RenderProductItem(props) {
  return (
    <div className="product-item-container">
      <img className="imgcontainer" src={props.data.thumbnail_url} />
      <h3 style={{color: "black"}}>{props.data.name}</h3>
      <p className="price">
        <span className="dprice">{props.data.discounted_price} INR</span>
        <span className="oprice">{props.data.price} INR</span>
        
      </p>
      <button className="addtocart">Add to cart</button>
    </div>
  );
}
