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
import MSimg from "../../assets/Portfolio/mysql-icon.svg";
import INSimg from "../../assets/Portfolio/insomnia.svg";

export default function About() {
  return (
    <div class="text-center absolute bottom-5 right-5">
      <div
        id="skill-box"
        className="flex justify-center text-center border rounded-md relative"
      >
        <div className="pt-3">
          <h2>These are some of the tools I've worked with:</h2>
        </div>
        <div>
          <div id="box-1" className="absolute top-[75px] left-[40px]">
            <img
              src={GITimg}
              alt="Git"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={HTMLimg}
              alt="HTML"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={CSSimg}
              alt="CSS"
              width="50"
              height="50"
              className="pb-3"
            />
          </div>
          <div id="box-2" className="absolute top-[75px] left-[130px]">
            <img
              src={JSimg}
              alt="JavaScript"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={RJSimg}
              alt="React"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={NJSimg}
              alt="NodeJS"
              width="50"
              height="50"
              className="pb-3"
            />
          </div>
          <div id="box-3" className="absolute top-[75px] left-[220px]">
            <img
              src={MSimg}
              alt="MySQL"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={MONimg}
              alt="MongoDB"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={INSimg}
              alt="Insomnia"
              width="50"
              height="50"
              className="pb-3"
            />
          </div>
          <div id="box-4" className="absolute top-[75px] left-[310px]">
            <img
              src={BSimg}
              alt="Bootstrap"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={TWimg}
              alt="Tailwind"
              width="50"
              height="50"
              className="pb-3"
            />
            <img
              src={GQLimg}
              alt="GraphQL"
              width="50"
              height="50"
              className="pb-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
