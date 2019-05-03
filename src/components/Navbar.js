import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { CartButton } from "./Button";
import Styled from "styled-components";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-extand-sm navbar-dark bg-primary px-sm-5">
        {/* 
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk */}

        <Link to="/">
          <img src={Logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item ml5" />
        </ul>
        <Link to="/cart" className="ml-auto">
          <CartButton>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </CartButton>
        </Link>
      </nav>
    );
  }
}
/* Using styled components */

export default Navbar;
