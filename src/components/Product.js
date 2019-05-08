import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Product extends React.Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto clo-md-9 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("clicked")}
          >
            <Link to="/details">
              <img src={img} alt="Product image" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("Added to cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* Card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span> {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = Styled.div`
.card{
  border-color: transparent;
  transition: all 1s linear; 
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}
&:hover{
  .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
  .card-footer{
    background: rgba(247,247,247);
  }
}
`;

export default Product;
