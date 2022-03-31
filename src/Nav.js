import React from "react";
import "./App.css"
import {Link} from "react-router-dom";

const Nav = () => {
  const linkStyle = {
    color: 'white'
  }

  return (
    <nav>
      <ul className="link">
        <Link style={linkStyle} to='/'>
          <li>Name</li>
        </Link>
        <Link style={linkStyle} to='/verse'>
          <li>Verse</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;