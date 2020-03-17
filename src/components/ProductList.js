import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductContextConsumer} from '../context'

class ProductList extends Component {
    render() {
        //console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title></Title>
                        <div className="row">
                            <ProductContextConsumer>
                                {
                                    (data)=>{
                                        return data.products.map((item)=>{
                                            return <Product key={item.id} product={item}/>
                                        })
                                    }
                                }
                            </ProductContextConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList
