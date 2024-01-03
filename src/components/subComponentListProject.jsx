import "./listProjectStyles.css";
const SubListingProjects = ({ imgSrc, heading, subHeadingURL, gitHubLink }) => {
  return (
    <div className="row">
      <img src={imgSrc} alt="" />
      <div className="main-row">
        <div className="row-text">
          <a href={subHeadingURL}>
            <h5>Live Project Link</h5>
          </a>
        </div>
        <div className="row-icon">
          <a href={gitHubLink}>
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
      <h4>{heading}</h4>
    </div>
  );
};

export default SubListingProjects;
