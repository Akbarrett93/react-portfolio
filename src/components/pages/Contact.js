import React from "react";

export default function Contact() {
  return (
    <div class="text-center justify-center">
      <h1>Contact Me:</h1>
      <form
        action="https://formsubmit.co/akbarrett1993@gmail.com"
        method="POST"
      >
        <input
          type="text"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          name="name"
          required
          placeholder="Your Name"
        ></input>
        <input
          type="text"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          name="email"
          required
          placeholder="Your Email"
        ></input>
        <div>
          <textarea
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
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
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
