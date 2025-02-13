import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import { useState } from "react";
import Projects from "../components/Projects";
import "../styles/Portfolio.css";
import memoryCardScreenshot from "../assets/memory-card.webp";
import cvApplicationScreenshot from "../assets/cv-application.webp";
import pokemonGuessingGameScreenshot from "../assets/pokemon-guessing-game.webp";
import weatherAppScreenshot from "../assets/weather-app.webp";

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
      url: "https://ceez-11.github.io/Odin-Project-Memory-Card/",
    },
    {
      id: 2,
      name: "CV Application",
      image: cvApplicationScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-CV-Application/",
    },
    {
      id: 3,
      name: "Weather App",
      image: weatherAppScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Weather-App/",
    },
    {
      id: 4,
      name: "Pokemon-Guessing-Game",
      image: pokemonGuessingGameScreenshot,
      category: "mini-projects",
      url: "https://ceez-11.github.io/Pokemon-Guessing-Game/",
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
