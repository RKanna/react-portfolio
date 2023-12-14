import { useEffect, useState } from "react";
import "./navbarStyles.css";
import "./mediaQueries.css";
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

  return (
    <section className={isSticky ? "navBar sticky" : "navBar"} id="nav-bar">
      <a href="#" className="logo">
        &lt; Kannan <span className="clr-for-span forX">/&gt;</span>
      </a>

      <div
        className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`}
        onClick={handleMenuClick}
        id="icon-menu"
      ></div>
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="top-nav-btn">
        <a href="#about" className="nav-btn">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default Navbar;
