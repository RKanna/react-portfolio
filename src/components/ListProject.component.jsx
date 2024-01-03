import "./listProjectStyles.css";
import "./mediaQueries.css";
import SubListingProjects from "./subComponentListProject";
import { useState, useEffect } from "react";
const ProjectList = () => {
  const [boxDetails, setBoxDetails] = useState([
    {
      imgSrc: "./images/projects/ecom.jpg",
      heading: "Ecommerce Application",
      subHeadingURL: "https://final-react-first-project.netlify.app/",
      gitHubLink: "https://github.com/RKanna/blog-main-project",
    },
    {
      imgSrc: "./images/projects/blog.jpg",
      heading: "Blog Application",
      subHeadingURL: "https://blog-shine.netlify.app/",
      gitHubLink: "https://github.com/RKanna/blog-main-project",
    },
    {
      imgSrc: "./images/projects/movie.jpg",
      heading: "Movie Database Application",
      subHeadingURL: "https://movie-app-rho-amber.vercel.app/",
      gitHubLink: "https://github.com/RKanna/next-movie-app-netlify",
    },
    {
      imgSrc: "./images/show-port.jpg",
      heading: "Website Development for Dark X",
      subHeadingURL: "Website Design",
    },
    {
      imgSrc: "./images/show-port.jpg",
      heading: "Website Development for Dark X",
      subHeadingURL: "Website Design",
    },
    {
      imgSrc: "./images/turning-head.png",
      heading: "Turning Head Website",
      subHeadingURL: "Live URL",
    },
  ]);

  return (
    <section className="main-portfolio" id="portfolio">
      <div className="center-text">
        <h2>
          My <span className="clr-for-span">Portfolio</span>
        </h2>
      </div>
      <div className="portfolio-content">
        {boxDetails.slice(0, 3).map((box, index) => (
          <SubListingProjects
            key={index}
            imgSrc={box.imgSrc}
            heading={box.heading}
            subHeadingURL={box.subHeadingURL}
            gitHubLink={box.gitHubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
