import React, { Component } from "react";
import styled from "styled-components";
import { ProductContextConsumer } from "../context";
import ButtonContainer from "./Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductContextConsumer>
        {data => {
          const { openModal, closeModal, modalOpen } = data;
          const { img, title, price } = data.modalProduct;
          return (
            modalOpen && (
              <ModalWarpper>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <img src={img} className="img-fluid" alt="product"></img>
                      <h5>{title}</h5>
                      <h5 className="text-muted">
                        {price.toLocaleString("hi-IN", {
                          style: "currency",
                          currency: "INR"
                        })}{" "}
                      </h5>
                     <Link to="/">
                         <ButtonContainer onClick={()=>{
                             closeModal();
                         }}>
                             Continue shopping
                         </ButtonContainer>
                     </Link>
                     <Link to="/cart">
                         <ButtonContainer cart onClick={()=>{
                             closeModal();
                         }}>
                             Go to Cart
                         </ButtonContainer>
                     </Link>
                    </div>
                  </div>
                </div>
              </ModalWarpper>
            )
          );
        }}
      </ProductContextConsumer>
    );
  }
}

const ModalWarpper = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify:content:center;
#modal {
    background : var(--mainWhite)

}
`;

export default Modal;
