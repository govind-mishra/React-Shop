import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductContextConsumer } from "../../context";
import CartList from './CartList'
import CartTotals from './CartTotals'

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductContextConsumer>
          {data => {
            const { cart } = data;
            //if currently cart is empty
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="Cart"></Title>
                  <CartColumns />
                  <CartList data={data}></CartList>
                  <CartTotals data={data} history={this.props.history}></CartTotals>
                </React.Fragment>
              );
            } else {
              return <EmptyCart></EmptyCart>;
            }
          }}
        </ProductContextConsumer>
      </section>
    );
  }
}

export default Cart;
