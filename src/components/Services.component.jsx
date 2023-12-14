import "./servicesStyles.css";
import "./mediaQueries.css";
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="center-text">
        <h2>
          My <span className="clr-for-span">Services</span>
        </h2>
      </div>
      <div className="services-content">
        <div className="box">
          <img src="" alt="" />
          <h3>UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            cupiditate similique voluptate! Vel quos atque sed adipisci illum
            nisi repellat.
          </p>
          <a href="#">
            Download Now<i className="ri-arrow-right-line"></i>
          </a>
        </div>
        <div className="box">
          <img src="" alt="" />
          <h3>UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            cupiditate similique voluptate! Vel quos atque sed adipisci illum
            nisi repellat.
          </p>
          <a href="#">
            Download Now<i className="ri-arrow-right-line"></i>
          </a>
        </div>
        <div className="box">
          <img src="" alt="" />
          <h3>UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            cupiditate similique voluptate! Vel quos atque sed adipisci illum
            nisi repellat.
          </p>
          <a href="#">
            Download Now<i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
