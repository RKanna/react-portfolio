import React from "react";
import "./servicesStyles.css";
import "./mediaQueries.css";

const serviceData = [
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate similique voluptate! Vel quos atque sed adipisci illum nisi repellat.",
    downloadLink: "#",
    image:
      "https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_1280.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate similique voluptate! Vel quos atque sed adipisci illum nisi repellat.",
    downloadLink: "#",
    image:
      "https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_1280.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate similique voluptate! Vel quos atque sed adipisci illum nisi repellat.",
    downloadLink: "#",
    image:
      "https://cdn.pixabay.com/photo/2015/05/19/07/44/browser-773215_1280.png",
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
            <a href={service.downloadLink}>
              Download Now<i className="ri-arrow-right-line"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
