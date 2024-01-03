import "./contactStyles.css";
import "./mediaQueries.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  // const serviceKey = import.meta.env.VITE_SERVICE_KEY;
  // const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
  // const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  // console.log(import.meta.env.VITE_TEMPLATE_ID);
  // console.log("TEMPLATE_ID:", import.meta.env.TEMPLATE_KEY);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ypp5snk",
        "template_owt2l9j",
        form.current,
        "MdKRUc0TlleoXjB7S"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email Sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact" id="contact">
      <div className="center-text">
        <h2>
          Contact <span className="clr-for-span">Me</span>
        </h2>
      </div>
      <div className="contact-form">
        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Email Address..."
            name="user_email"
            required
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Write Message Here..."
            required
          ></textarea>
          <input type="submit" name="" className="send-btn" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
