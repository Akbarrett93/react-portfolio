import React from "react";
import { Link } from "react-router-dom";
import homeimg from "../assets/home.png";
import aboutimg from "../assets/about.png";
import portimg from "../assets/portfolio.png";
import conimg from "../assets/email.png";

export default function NavTabs() {
  return (
    <nav className="bg-gray-200 flex justify-between border dark:bg-gray-900 p-1">
      <Link to="/home">
        <img src={homeimg} alt="home" width="43" height="43" />
      </Link>
      <ul className="flex gap-1">
        <li>
          <Link to="/about">
            <img src={aboutimg} alt="about" width="43" height="43" />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <img src={portimg} alt="portfolio" width="43" height="43" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src={conimg} alt="contact" width="45" height="45" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
