import "./listProjectStyles.css";
const SubListingProjects = ({ imgSrc, heading, subHeading }) => {
  return (
    <div className="row">
      <img src={imgSrc} alt="" />
      <div className="main-row">
        <div className="row-text">
          <h5>{subHeading}</h5>
        </div>
        <div className="row-icon">
          <i className="ri-github-fill"></i>
        </div>
      </div>
      <h4>{heading}</h4>
    </div>
  );
};

export default SubListingProjects;
