import React from "react";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { incrementItem, decrementItem, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="Product"
        ></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product - </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price - </span>
        {price}
      </div>
      {/* for button column */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
              {/* for - button */}
              <span className="btn btn-black mx-1" onClick={()=>{
                  decrementItem(id)
              }}> - </span>
              <span className="btn btn-black mx-1">{count}</span>
               {/* for + button */}
              <span className="btn btn-black mx-1" onClick={()=>{
                  incrementItem(id)
              }}> + </span>
          </div>
      </div>
      {/* end button column */}
      {/* Remove item column */}
      <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={()=>{removeItem(id)}}>
              <i className="fas fa-trash"></i>
          </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
          <strong>Item Total - {total}</strong>
      </div>
    </div>
  );
}

export default CartItem;
