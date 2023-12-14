import "./contactStyles.css";
import "./mediaQueries.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="center-text">
        <h2>
          Contact <span className="clr-for-span">Me</span>
        </h2>
      </div>
      <div className="contact-form">
        <form action="">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address..." required />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write Message Here..."
            required
          ></textarea>
          <input
            type="submit"
            name=""
            value="Send Message"
            className="send-btn"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
