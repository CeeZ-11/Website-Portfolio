export default function Projects({ projectList }) {
  return (
    <>
      {projectList.map((project) => {
        <li key={project.id}>
          <img src={project.url} alt={project.name} />
          <h5>{project.name}</h5>
          <h3>{project.category}</h3>
        </li>;
      })}
    </>
  );
}
