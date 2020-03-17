import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductContextConsumer} from '../context'
import ButtonContainer from './Button'

class Details extends Component {

    render() {
        return (
            <ProductContextConsumer>
                {
                    (data)=>{
                        const {id,title,img,price,company,info,inCart} = data.detailProduct;
                        return (
                            <div className="container py-5">
                                {/* title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* title */}
                                {/* product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img src={img} className="img-fluid" alt="Products"></img>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                                        <h2>model:{title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by : <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                            {price.toLocaleString("hi-IN", { style: "currency", currency: "INR" })}                                               
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Product Information -
                                        </p>
                                        <p className="text-muted lead">{info}</p>
                                         {/* Button */}
                                         <div>
                                             <Link to="/" >
                                                 <ButtonContainer>
                                                     Back to Product
                                                 </ButtonContainer>
                                             </Link>
                                             {/* in cart button */}
                                             <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{
                                                 data.addToCart(id);
                                                 data.openModal(id);
                                                 }}>
                                                 {inCart?"In Cart":"Add to Cart"}
                                             </ButtonContainer>
                                         </div>
                                          {/* Button */}
                                    </div>
                                </div>
                                {/* product info */}
                            </div>
                        )
                    }
                }
            </ProductContextConsumer>
        )
    }
}

export default Details
