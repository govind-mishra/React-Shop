import React from 'react';
import CartItem from './CartItem'

function CartList({data}) {
    const {cart} = data;
    return (
        <div className="container-fluid">
            {
                cart.map((item)=>{
                    return(
                        <CartItem key={item.id} item={item} value={data}></CartItem>
                    )
                })
            }
            
        </div>
    )
}

export default CartList;
