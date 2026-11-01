import { lazy, useMemo } from "react";
const ProjectItem = lazy(() => import("./ProjectItem"));

export default function Projects({ projectList }) {
  const memoizedProjects = useMemo(() => {
    return projectList.map((project) => (
      <ProjectItem key={project.id} project={project} />
    ));
  }, [projectList]);

  if (projectList.length === 0) {
    return (
      <p className="coming-soon">Coming soon.</p>
    );
  }

  return <ul>{memoizedProjects}</ul>;
}
