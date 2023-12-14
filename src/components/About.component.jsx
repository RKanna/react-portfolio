import "./aboutStyles.css";
import "./mediaQueries.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="./images/myimg-main.jpg" alt="Profile-img" />
      </div>
      <div className="about-content">
        <h2>
          Web <span className="clr-for-span">Developer</span>
          <br />& UI Designer
        </h2>
        <div className="experience">
          <p className="expertize">
            Experience <span className="clr-for-span">6 Months</span>
          </p>
          <p className="expertize">
            Specialty <span className="clr-for-span">HTML, CSS, Js, React</span>
          </p>
          <p className="expertize">
            Address
            <span className="clr-for-span">Jaganathan Nagar, Coimbatore</span>
          </p>
          <p className="expertize">
            Email:
            <span className="clr-for-span">balakrishnan.rkannan@gmail.com</span>
          </p>
          <p className="expertize">
            Phone: <span className="clr-for-span">9095173971</span>
          </p>
          <p className="expertize">
            Freelance: <span className="clr-for-span">Available</span>
          </p>
        </div>
        <a href="#portfolio" className="btn">
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default About;
