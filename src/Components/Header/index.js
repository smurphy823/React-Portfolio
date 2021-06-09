import React from "react";
import { Link } from "react-router-dom";
import "../Header/style.css";


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg" style={StyleSheet.Bar}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Stephanie Murphy</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <Link
                            className="nav-link"
                            to="/">Home</Link>

                        <Link
                            className="nav-link"
                            to="/portfolio">Portfolio
                </Link>

                        <Link
                            className="nav-link"
                            to="/contact">Contact
                </Link>
        </div>
      </div>
    </nav>
        
    );
}

export default Navbar;
