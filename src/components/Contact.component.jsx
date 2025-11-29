import "./contactStyles.css";
import "./mediaQueries.css";
import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const sendEmail = async (e) => {
    e.preventDefault();

    const formElement = e.target;
    const formData = new FormData(formElement);

    // Web3Forms required access key
    formData.append("access_key", "5bad5087-4ee4-4842-b547-b91683e5fe39");

    // Optional extra metadata
    formData.append("subject", "New message from portfolio contact form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast("Email Sent");
        formElement.reset();
      } else {
        console.error("Web3Forms error:", data);
        toast("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms request failed:", error);
      toast("Failed to send email. Please try again.");
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="center-text">
        <h2>
          Contact <span className="clr-for-span">Me</span>
        </h2>
      </div>
      <div className="contact-form">
        <form onSubmit={sendEmail}>
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
