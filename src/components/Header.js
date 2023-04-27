import React from "react";
import { Link } from "react-router-dom";
import homeimg from "../assets/home.png";
import aboutimg from "../assets/about.png";
import portimg from "../assets/portfolio.png";
import conimg from "../assets/email.png";

export default function NavTabs() {
  return (
    <nav id="navbar" className="grid grid-rows-3">
      <div>
        <Link to="/home" style={{ display: "contents" }}>
          <img src={homeimg} alt="home" width="43" height="43" />
        </Link>
      </div>
      <div>
        <Link to="/about" style={{ display: "contents" }}>
          <img src={aboutimg} alt="about" width="43" height="43" />
        </Link>
      </div>
      <div>
        <Link to="/portfolio" style={{ display: "contents" }}>
          <img src={portimg} alt="portfolio" width="43" height="43" />
        </Link>
      </div>
      <div>
        <Link to="/contact" style={{ display: "contents" }}>
          <img src={conimg} alt="contact" width="45" height="45" />
        </Link>
      </div>
    </nav>
  );
}
