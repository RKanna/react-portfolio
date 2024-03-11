import SubListingProjects from "./subComponentListProject";
import { useProjectContext } from "../Context/Projects.Context";
import { Link } from "react-router-dom";

const Projects = () => {
  const { boxDetails } = useProjectContext();
  return (
    // <div className="h-screen flex justify-center items-center">
    //   <div>hi</div>
    //   <div>hello</div>
    // </div>
    <section className="main-portfolio" id="ProjectList">
      <div className="center-text">
        <h2>
          My <span className="clr-for-span">Projects</span>
        </h2>
      </div>
      <div className="portfolio-content">
        {boxDetails.map((box, index) => (
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

export default Projects;
