export default function Projects({ projectList }) {
  if (projectList.length === 0) {
    return (
      <ul>
        <h2>Coming Soon..</h2>
      </ul>
    );
  }

  return (
    <ul>
      {projectList.map((project) => {
        return (
          <li key={project.id}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  srcSet={project.image}
                  alt={project.name}
                  loading="lazy"
                />
              </div>
              <div className="project-details">
                <h5>{project.name}</h5>
                <h3>{project.category}</h3>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
