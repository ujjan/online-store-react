import React from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
class ProductProvider extends React.Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };
  handleDetails = () => {
    console.log("from handelDetails");
  };

  addToCart = () => {
    console.log("from addToCart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
