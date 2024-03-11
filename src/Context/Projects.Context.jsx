import { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [boxDetails, setBoxDetails] = useState([
    {
      imgSrc: "./images/projects/ecom.jpg",
      heading: "Ecommerce Application",
      subHeadingURL: "https://ecomfirebase.netlify.app/",
      gitHubLink: "https://github.com/RKanna/ecom-final-project",
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
      imgSrc: "./images/projects/blogV2.jpg",
      heading: "MERN Stack Blog Web Application",
      subHeadingURL: "https://blog-version-two.vercel.app/",
      gitHubLink: "https://github.com/RKanna/MERN-Blog-version-two",
    },
    // {
    //   imgSrc: "./images/show-port.jpg",
    //   heading: "Website Development for Dark X",
    //   subHeadingURL: "Website Design",
    // },
    // {
    //   imgSrc: "./images/show-port.jpg",
    //   heading: "Website Development for Dark X",
    //   subHeadingURL: "Website Design",
    // },
    // {
    //   imgSrc: "./images/turning-head.png",
    //   heading: "Turning Head Website",
    //   subHeadingURL: "Live URL",
    // },
  ]);

  return (
    <ProjectContext.Provider value={{ boxDetails, setBoxDetails }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
