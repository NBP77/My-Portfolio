import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
    
    return (
      <div>
        <header>
        <h1>Nick Pendergast</h1>
        <nav class="nav-links">
          <ul>

     
          <Link className="link" to="/home">About Me</Link>
          <Link className="link" to="/projects">Projects</Link> 
          <Link className="link" to="#contact">Contact Info</Link>

    
          </ul>
        </nav>
        </header>
        </div>
    );
  };

  export default Header;