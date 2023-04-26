import React from "react";
import BSimg from "../../assets/Portfolio/getbootstrap-icon.svg";
import GITimg from "../../assets/Portfolio/git-scm-icon.svg";
import GQLimg from "../../assets/Portfolio/graphql-icon.svg";
import JSimg from "../../assets/Portfolio/javascript-vertical.svg";
import MONimg from "../../assets/Portfolio/mongodb-icon.svg";
import NJSimg from "../../assets/Portfolio/nodejs-icon.svg";
import RJSimg from "../../assets/Portfolio/reactjs-icon.svg";
import TWimg from "../../assets/Portfolio/tailwindcss-icon.svg";
import CSSimg from "../../assets/Portfolio/w3_css-icon.png";
import HTMLimg from "../../assets/Portfolio/w3_html5-icon.svg";
import EXimg from "../../assets/Portfolio/expressjs-icon.svg";
import MSimg from "../../assets/Portfolio/mysql-icon.svg";

export default function Home() {
  return (
    <div id="home-container">
      <div className="text-center justify-center">
        <h1>Welcome to my landing page!</h1>
        <h2>
          I'm a Full Stack Software Dev who loves working on and building web
          applications.
        </h2>
      </div>
      <div id="skill-box" className="flex justify-center text-center border">
        <h2>These are some of the tools I've worked with:</h2>
      </div>
    </div>
  );
}
