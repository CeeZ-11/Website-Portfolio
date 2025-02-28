import useOnScreen from "../hooks/useOnScreen";
import OpenLinkIcon from "../components/Icons/OpenLinkIcon";

const ProjectItem = ({ project }) => {
  const [ref, isVisible] = useOnScreen();

  return (
    <li ref={ref} className={`fade-in-section ${isVisible ? "visible" : ""}`}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="project-image">
          <img src={project.image} srcSet={project.image} alt={project.name} />
          <div className="visit-site-icon">
            <OpenLinkIcon />
          </div>
        </div>
      </a>
      <div className="project-details">
        <h5>{project.name}</h5>
        <h3>{project.category}</h3>
      </div>
    </li>
  );
};

export default ProjectItem;
