import useOnScreen from "../hooks/useOnScreen";
import OpenLinkIcon from "../components/Icons/OpenLinkIcon";

// Readable names for the category ids used in Portfolio.jsx.
const CATEGORY_LABELS = {
  "work-projects": "Work demo",
  "odin-projects": "The Odin Project",
  "mini-projects": "Mini project",
  "personal-projects": "Personal project",
  collaborations: "Collaboration",
};

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
          <img src={project.image} alt={project.name} loading="lazy" />
          <div className="visit-site-icon">
            <OpenLinkIcon />
          </div>
        </div>
      </a>
      <div className="project-details">
        <h2>{project.name}</h2>
        <p className="project-category">
          {CATEGORY_LABELS[project.category] ?? project.category}
        </p>
      </div>
    </li>
  );
};

export default ProjectItem;
