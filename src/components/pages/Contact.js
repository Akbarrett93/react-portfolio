import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me:</h1>
      <form
        action="https://formsubmit.co/akbarrett1993@gmail.com"
        method="POST"
      >
        <input type="text" name="name" required placeholder="Your Name"></input>
        <input
          type="text"
          name="email"
          required
          placeholder="Your Email"
        ></input>
        <input type="text" name="name" required placeholder="Your Name"></input>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
