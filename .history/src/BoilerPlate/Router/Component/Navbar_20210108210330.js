import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT US</Link>
      </ul>
    </div>
  );
}

export default Navbar;
