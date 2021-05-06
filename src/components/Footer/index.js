import React from "react";
import "./style.css";

function Footer() {
  return (
    <div>
      <footer>
        <h4>Contact Me</h4>
        <ul class="contact" id="contact">
          <li>(555) 555-555</li>
          <li>
            <a
              href="https://onedrive.live.com/?cid=19EB23398767F6CF&id=19EB23398767F6CF%2118396&parId=19EB23398767F6CF%21307&o=OneUp"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/nbp77" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nick-pendergast-273014123/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
