import "./listProjectStyles.css";
import "./mediaQueries.css";
import SubListingProjects from "./subComponentListProject";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProjectContext } from "../Context/Projects.Context";
import { HashLink } from "react-router-hash-link";

const ProjectList = () => {
  const { boxDetails } = useProjectContext();

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
      <div className="text-center pt-10">
        <HashLink
          className="hover:text-[#c50961] transition-colors duration-300"
          to={"/All-Projects-Page"}
        >
          View All My Projects
        </HashLink>
      </div>
    </section>
  );
};

export default ProjectList;
