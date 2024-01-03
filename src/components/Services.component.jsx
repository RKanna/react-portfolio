import React from "react";
import "./servicesStyles.css";
import "./mediaQueries.css";

const serviceData = [
  {
    title: "Web Developer",
    // description:
    //   "Expert in full-stack development, I create responsive websites for seamless user experiences on both mobile and desktop platforms, ensuring optimal functionality and user satisfaction.",
    description:
      "I engineer responsive full-stack websites for mobile and PC, seamlessly blending functionality and design for a superior cross-platform user experience.",
    downloadLink: "#",
    image: "./images/development.png",
  },
  {
    title: "UI/UX Design",
    description:
      "I specialize in UI/UX design, bringing ideas to life with Photoshop. Meticulously crafting visually compelling interfaces for seamless and engaging user experiences.",
    downloadLink: "#",
    image: "./images/ux-design.png",
  },
  {
    title: "Logo Design",
    description:
      "Proficient in Adobe Illustrator, I craft impactful logos. Merging creativity with precision, each design reflects a unique brand identity for lasting visual appeal.",
    downloadLink: "#",
    image: "./images/artist.png",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="center-text">
        <h2>
          My <span className="clr-for-span">Services</span>
        </h2>
      </div>
      <div className="services-content">
        {serviceData.map((service, index) => (
          <div key={index} className="box">
            <img className="logo-service" src={service.image} alt="" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {/* <a href={service.downloadLink}>
              Download Now<i className="ri-arrow-right-line"></i>
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
