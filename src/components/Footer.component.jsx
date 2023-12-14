import "./footerStyles.css";
import "./mediaQueries.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="copyright">
        <p>2023 Kannan, All Rights Reserved.</p>
      </div>
      <a href="#hero" className="scroll-top">
        <i className="ri-arrow-up-s-fill"></i>
      </a>
    </section>
  );
};

export default Footer;
