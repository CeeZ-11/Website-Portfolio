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
            <div className="project-image">
              <img src={project.url} alt={project.name} />
            </div>
            <div className="project-details">
              <h5>{project.name}</h5>
              <h3>{project.category}</h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
