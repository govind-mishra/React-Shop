import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const productContext = React.createContext();
//provider
//consumer

class ProductProviderContext extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.map(item => {
      const singleitem = { ...item };
      return (tempProducts = [...tempProducts, singleitem]);
    });
    this.setState({
      products: tempProducts
    });
  };

  getProductById = id => {
    const item = this.state.products.find(x => x.id === id);
    return item;
  };

  handleDetail = id => {
    const productfordetail = this.getProductById(id);
    this.setState({
      detailProduct: productfordetail
    });
  };

  addToCart = id => {
    const tempProducts = [...this.state.products];
    //use index to get item so that after changing state product will show in same order as previous
    const index = tempProducts.indexOf(this.getProductById(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = product.count + 1;
    const price = product.price * product.count;
    product.total = price;
    this.setState(
      prevState => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const product = this.getProductById(id);
    this.setState(prevState => {
      return {
        modalOpen: true,
        modalProduct: product
      };
    });
  };

  closeModal = () => {
    this.setState(prevState => {
      return {
        modalOpen: false
      };
    });
  };

  incrementItem = id => {
    console.log(id);
      let tempCart = [...this.state.cart];
      const selectedProducts = tempCart.find(x=>x.id===id);
      const index = tempCart.indexOf(selectedProducts);
      const product = tempCart[index];
      product.count+=1;
      const totalprice = product.price*product.count;
      product.total = totalprice;
      this.setState((prevState)=>{
        return{
          cart:[...tempCart],
        }
      },()=>{
        this.addTotals();
      })
  };

  decrementItem = id => {
    let tempCart = [...this.state.cart];
    const selectedProducts = tempCart.find(x=>x.id===id);
    const index = tempCart.indexOf(selectedProducts);
    const product = tempCart[index];
    product.count-=1;
    if(product.count===0){
      this.removeItem(id);
    }
    else{
      const totalprice = product.price*product.count;
      product.total = totalprice;
      this.setState((prevState)=>{
        return{
          cart:[...tempCart],
        }
      },()=>{
        this.addTotals();
      })
    }
  };

  removeItem = (id) =>{
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(x=>x.id!==id);
    const index = tempProducts.indexOf(this.getProductById(id));
    let removedItem = tempProducts[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;
    this.setState((prevState)=>{
      return {
        cart:[...tempCart],
        products:[...tempProducts]
      }

    },()=>{
      this.addTotals();
    })
  }

  clearCart = () =>{
    this.setState((prevstate)=>{
      return {
        cart:[]
      }
    },()=>{
      this.setProducts();
      this.addTotals();
    })
  }

  addTotals  = () =>{
    let subtotal = 0;
    this.state.cart.map((item)=>{
     return  subtotal+=item.total;
    })
    const tempTax = subtotal*0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState((prevstate)=>{
      return {
        cartSubTotal : subtotal,
        cartTax:tax,
        cartTotal:total
      }
    })
  }

  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementItem : this.incrementItem,
          decrementItem:this.decrementItem,
          removeItem : this.removeItem,
          clearCart  : this.clearCart

        }}
      >
        {this.props.children}
      </productContext.Provider>
    );
  }
}

const ProductContextConsumer = productContext.Consumer;

export { ProductProviderContext, ProductContextConsumer };
