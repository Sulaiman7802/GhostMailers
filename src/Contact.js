import React from "react";

const Contact = () => {
  return (
    <div className="grid place-items-center py-20 mx-5 md:mx-0">
      <h2 className="text-3xl md:text-4xl mb-10">Contact Us</h2>
      <form
        className="space-y-8"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p>
          <label className="block mb-2 text-xl">Name</label>
          <input
            className="w-full p-3 rounded outline-none text-gray-800"
            type="text"
            name="name"
          />
        </p>
        <p>
          <label className="block mb-2 text-xl">Email</label>
          <input
            className="w-full p-3 rounded outline-none text-gray-800"
            type="email"
            name="email"
          />
        </p>
        <p>
          <label className="block mb-2 text-xl">Message</label>
          <textarea
            className="w-full p-3 rounded outline-none text-gray-800"
            name="message"
          ></textarea>
        </p>
        <p>
          <button className="py-3 px-10 bg-indigo-800 rounded-lg" type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
