import React from "react";
import LINimg from "../assets/Portfolio/linkedin-icon.svg";
import HUBimg from "../assets/Portfolio/github-mark-white.svg";
import EMimg from "../assets/Portfolio/icons8-email-48.png";

export default function Footer() {
  return (
    <div className="text-center flex space-x-5 justify-center">
      <p>Developed by Alex Barrett, 2023</p>
      <a href="https://www.linkedin.com/in/alex-barrett-2a4510138/">
        <img src={LINimg} alt="LinkedIn" width="25" height="25" />
      </a>
      <a href="https://github.com/Akbarrett93">
        <img src={HUBimg} alt="GitHub" width="25" height="25" />
      </a>
      <a href="mailto: akbarrett1993@gmail.com">
        <img src={EMimg} alt="Email" width="30" height="30" />
      </a>
    </div>
  );
}
