import React from "react";
import homeimg from "../assets/home.png";
import aboutimg from "../assets/about.png";
import portimg from "../assets/portfolio.png";
import conimg from "../assets/email.png";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="bg-gray-200 border dark:bg-gray-900">
      <div class="max-w flex flex-wrap mx-auto p-4 justify-end">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <img src={homeimg} alt="home" width="43" height="43"></img>
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          <img src={aboutimg} alt="about" width="43" height="43"></img>{" "}
        </a>
        <a
          href="#project"
          onClick={() => handlePageChange("Project")}
          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          <img src={portimg} alt="portfolio" width="43" height="43"></img>{" "}
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          <img src={conimg} alt="contact" width="45" height="45"></img>{" "}
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;
