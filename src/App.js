import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Default />
      <Details />
      <Navbar />
      <Product />
      <ProductList />

      <h3>Hello from App</h3>
    </React.Fragment>
  );
}

export default App;
