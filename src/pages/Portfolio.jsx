import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import { useState } from "react";
import Projects from "../components/Projects";
import "../styles/Portfolio.css";
import memoryCardScreenshot from "../assets/memory-card.webp";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all-projects");

  const navButtons = [
    { id: "all-projects", name: "All Projects" },
    { id: "odin-projects", name: "Odin Projects" },
    { id: "mini-projects", name: "Mini Projects" },
    { id: "personal-projects", name: "Personal Projects" },
    { id: "collaborations", name: "Collaborations" },
  ];

  const projectList = [
    {
      id: 1,
      name: "Memory Card",
      image: memoryCardScreenshot,
      category: "odin-projects",
    },
    {
      id: 2,
      name: "CV Application",
      image: null,
      category: "odin-projects",
    },
    {
      id: 3,
      name: "Weather App",
      image: null,
      category: "odin-projects",
    },
    {
      id: 4,
      name: "Pokemon-Guessing-Game",
      image: null,
      category: "mini-projects",
    },
  ];

  return (
    <>
      <PageTitle name="Portfolio" />
      <div className="project-container nav-container">
        <nav className="info-nav">
          <ul>
            <NavButton
              navButtons={navButtons}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>
        <div className="project-content">
          {activeTab === "all-projects" && (
            <Projects projectList={projectList} />
          )}
          {activeTab === "odin-projects" && (
            <Projects
              projectList={projectList.filter(
                (project) => project.category === "odin-projects"
              )}
            />
          )}
          {activeTab === "mini-projects" && (
            <Projects
              projectList={projectList.filter(
                (project) => project.category === "mini-projects"
              )}
            />
          )}
          {activeTab === "personal-projects" && (
            <Projects
              projectList={projectList.filter(
                (project) => project.category === "personal-projects"
              )}
            />
          )}
          {activeTab === "collaborations" && (
            <Projects
              projectList={projectList.filter(
                (project) => project.category === "collaborations"
              )}
            />
          )}
        </div>
      </div>
    </>
  );
}
