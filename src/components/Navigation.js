import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w flex flex-wrap justify-end mx-auto p-4">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home <span class="tab"></span>
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About <span class="tab"></span>
        </a>
        <a
          href="#project"
          onClick={() => handlePageChange("Project")}
          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Portfolio <span class="tab"></span>
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={
            currentPage === "HContact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;
