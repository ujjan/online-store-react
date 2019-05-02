import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">column one </div>
        <div className="col-6">
          <span>
            <i className="fas fa-home" />
          </span>{" "}
          column two
        </div>
      </div>
    </div>
  );
}

export default App;
