import { lazy } from "react";

const ProjectItem = lazy(() => import("./ProjectItem"));

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
      {projectList.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
}
