import { useEffect, useState } from "react";
import "./navbarStyles.css";
import "./mediaQueries.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /////////////////////////

  return (
    <section className={isSticky ? "navBar sticky" : "navBar"} id="nav-bar">
      <HashLink to="/#hero" className="logo">
        &lt; Kannan <span className="clr-for-span forX">/&gt;</span>
      </HashLink>

      <div
        className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`}
        onClick={handleMenuClick}
        id="icon-menu"
      ></div>
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li>
          <HashLink to="/#hero">Home</HashLink>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#services">Services</HashLink>
        </li>
        <li>
          <HashLink to="/#portfolio">Portfolio</HashLink>
        </li>
        <li>
          <HashLink to="/#blog">Blog</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>
      <div className="top-nav-btn">
        {/* <a href="#about" className="nav-btn">
          Contact me
        </a> */}
        <HashLink to="/#about" className="nav-btn">
          Contact me
        </HashLink>
      </div>
    </section>
  );
};

export default Navbar;
