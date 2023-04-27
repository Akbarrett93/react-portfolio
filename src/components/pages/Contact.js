import React from "react";
import LINimg from "../../assets/Portfolio/linkedin-icon.svg";
import HUBimg from "../../assets/Portfolio/github-mark-white.svg";

export default function Contact() {
  return (
    <div id="contact-box" className="text-center m-[100px]">
      <div id="images" className="flex space-x-5 justify-center">
        <a href="https://www.linkedin.com/in/alex-barrett-2a4510138/">
          <img src={LINimg} alt="LinkedIn" width="50" height="50" />
        </a>
        <a href="https://github.com/Akbarrett93">
          <img src={HUBimg} alt="GitHub" width="50" height="50" />
        </a>
      </div>
      <br />
      <div>
        <h1>Email me directly:</h1>
        <form
          action="https://formsubmit.co/akbarrett1993@gmail.com"
          method="POST"
        >
          <input
            type="text"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            name="name"
            required
            placeholder="Your Name"
          ></input>
          <input
            type="text"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            name="email"
            required
            placeholder="Your Email"
          ></input>
          <div>
            <textarea
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              rows="5"
              cols="50"
              name="content"
              required
              placeholder="Your message here"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
