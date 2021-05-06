import React from "react";
import "./style.css";

function Header() {
    
    return (
      <div>
        <header>
        <h1>Nick Pendergast</h1>
        <nav class="nav-links">
          <ul>
            <li><a href="#about-me-title">About Me</a></li>
            <li><a href="#my-work-title">Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
        </header>
        </div>
    );
  };

  export default Header;