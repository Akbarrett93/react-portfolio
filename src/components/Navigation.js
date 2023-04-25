import React from "react";

function navTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-container">
      <li className="nav-tab">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-tab">
        <a
          href="#project"
          onClick={() => handlePageChange("Project")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-tab">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default navTabs;
