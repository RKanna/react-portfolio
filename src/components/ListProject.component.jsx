import "./listProjectStyles.css";
import "./mediaQueries.css";
import SubListingProjects from "./subComponentListProject";
import { useState, useEffect } from "react";
const ProjectList = () => {
  const [boxDetails, setBoxDetails] = useState([
    {
      imgSrc: "./images/show-port.jpg",
      heading: "Website Development for Dark X",
      subHeading: "Website Design",
    },
    {
      imgSrc: "./images/show-port.jpg",
      heading: "Website Development for Dark X",
      subHeading: "Website Design",
    },
    {
      imgSrc: "./images/show-port.jpg",
      heading: "Website Development for Dark X",
      subHeading: "Website Design",
    },
    {
      imgSrc: "./images/show-port.jpg",
      heading: "Website Development for Dark X",
      subHeading: "Website Design",
    },
    {
      imgSrc: "./images/show-port.jpg",
      heading: "Website Development for Dark X",
      subHeading: "Website Design",
    },
    {
      imgSrc: "./images/turning-head.png",
      heading: "Turning Head Website",
      subHeading: "Live URL",
    },
    //Space for Further new Data
  ]);

  return (
    <section className="main-portfolio" id="portfolio">
      <div className="center-text">
        <h2>
          My <span className="clr-for-span">Portfolio</span>
        </h2>
      </div>
      <div className="portfolio-content">
        {boxDetails.map((box, index) => (
          <SubListingProjects
            key={index}
            imgSrc={box.imgSrc}
            heading={box.heading}
            subHeading={box.subHeading}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
