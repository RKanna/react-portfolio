import "./footerStyles.css";
import "./mediaQueries.css";
import { HashLink } from "react-router-hash-link";
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
      <HashLink to="/#hero" className="scroll-top">
        <i className="ri-arrow-up-s-fill"></i>
      </HashLink>
    </section>
  );
};

export default Footer;
