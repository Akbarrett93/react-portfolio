import React from "react";
import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <nav id="navbar" className="grid grid-rows-3">
      <div>
        <Link to="/home" style={{ display: "inline-block" }}>
          <h1 className="pt-3 pl-3">Home</h1>
        </Link>
      </div>
      <div>
        <Link to="/about" style={{ display: "inline-block" }}>
          <h1 className="pt-3 pl-3">About</h1>
        </Link>
      </div>
      <div>
        <Link to="/portfolio" style={{ display: "inline-block" }}>
          <h1 className="pt-3 pl-3">Projects</h1>
        </Link>
      </div>
    </nav>
  );
}
