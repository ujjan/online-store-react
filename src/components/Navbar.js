import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { CartButton } from "./Button";
import Styled from "styled-components";

class Navbar extends React.Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-extand-sm navbar-dark  px-sm-5">
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
              products
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
      </NavWrapper>
    );
  }
}
/* Using styled components */

const NavWrapper = Styled.nav`
background: var(--mainBlue);
.nav-link{
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`;

export default Navbar;
