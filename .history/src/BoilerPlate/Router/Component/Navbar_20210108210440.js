import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/about">ABOUT US</Link>
        <br />
        <Link to="/contact">CONTACT US</Link>
        <br />
      </ul>
    </div>
  );
}

export default Navbar;
