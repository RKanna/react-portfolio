import "./footerStyles.css";
import "./mediaQueries.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="copyright">
        <p>{currentYear} Kannan, All Rights Reserved.</p>
      </div>
      {/* <a href="#hero" className="scroll-top">
        <i className="ri-arrow-up-s-fill"></i>
      </a> */}
      <a href="#hero" className="scroll-top">
        <i className="ri-arrow-up-s-fill"></i>
      </a>
    </section>
  );
};

export default Footer;
