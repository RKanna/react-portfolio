import "./heroStyles.css";
import "./mediaQueries.css";
const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="content-div">
        <h4>Hi, There!</h4>
        <h1>
          I'm <span className="clr-for-span forName">Kannan Ravindran</span>
        </h1>
        <p>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          sed! Id eligendi ratione excepturi nam. Voluptatibus sunt minima
          adipisci est mollitia dolor corrupti voluptatum non laborum sit
          tempore distinctio, */}
          A dedicated web developer and creative UI designer. I excel in pushing
          boundaries, crafting engaging web solutions, and fostering personal
          growth through the innovative and boundary-pushing world of web
          development.
          {/* A dedicated web developer and creative UI designer passionate about
          pushing boundaries. With a focus on crafting engaging web solutions,
          I'm driven by the challenge and excitement of innovation, fostering
          personal growth in this dynamic field. */}
        </p>
        <div className="social-link">
          <a href="#">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="#">
            <i className="ri-twitter-fill"></i>
          </a>
          <a href="#">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
        <div className="hero-btn">
          <a href="#contact" className="btn">
            Hire me
          </a>
          <a href="./pdf/Resume.pdf" className="btn btn-download" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
