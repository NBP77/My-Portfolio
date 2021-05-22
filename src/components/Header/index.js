import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>

      <nav>
        <ul>
          <Link className="link" to="/">
            About Me
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/contact">
            Contact Info
          </Link>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
