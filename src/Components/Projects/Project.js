export default function Project({
  project: { title, pic, description, site, github },
}) {
  return (
    <>
      <div className="title-container">
        <img src={pic} alt={title} />
      </div>
      <div className="title-container">
        <h3>{title}</h3>
      </div>
      <div className="project-info">
        <p className="project-description">&emsp;{description}</p>
        <div className="project-button-group">
          {site ? (
            <a href={site} target="_blank" rel="noreferrer">
              <img
                src={require("./SVG/genericwebsite.svg").default}
                alt="link to website"
                className="project-svg site"
              />
            </a>
          ) : null}
          <a href={github} target="_blank" rel="noreferrer">
            <img
              src={require("./SVG/github.svg").default}
              alt="link to github"
              className="project-svg github"
            />
          </a>
        </div>
      </div>
    </>
  );
}
