import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import { useState, useEffect } from "react";
import Projects from "../components/Projects";
import "../styles/Portfolio.css";
import memoryCardScreenshot from "../assets/memory-card.webp";
import cvApplicationScreenshot from "../assets/cv-application.webp";
import pokemonGuessingGameScreenshot from "../assets/pokemon-guessing-game.webp";
import weatherAppScreenshot from "../assets/weather-app.webp";
import battleShipScreenshot from "../assets/battleship.webp";
import rockPaperScissorsScreenshot from "../assets/rock-paper-scissors.webp";
import libraryScreenshot from "../assets/library.webp";
import todoListScreenshot from "../assets/todo-list.webp";
import restaurantPage from "../assets/restaurant-page.webp";
import ticTacToeScreenshot from "../assets/tic-tac-toe.webp";
import adminDashboardScreenshot from "../assets/admin-dashboard.webp";
import signUpFormScreenshot from "../assets/signup-form.webp";
import calculatorScreenshot from "../assets/calculator.webp";
import etchASketchScreenshot from "../assets/etch-a-sketch.webp";
import landingPageScreenshot from "../assets/landing-page.webp";

export default function Portfolio() {
  const [isPortVisible, setPortIsVisible] = useState(false);
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
      name: "Pokemon Guessing Game",
      image: pokemonGuessingGameScreenshot,
      category: "mini-projects",
      url: "https://ceez-11.github.io/Pokemon-Guessing-Game/",
    },
    {
      id: 5,
      name: "Battleship Game",
      image: battleShipScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Battleship/",
    },
    {
      id: 6,
      name: "Rock Paper Scissors Game",
      image: rockPaperScissorsScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Rock-Paper-Scissors/",
    },
    {
      id: 7,
      name: "Library App",
      image: libraryScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Library/",
    },
    {
      id: 8,
      name: "Todo List App",
      image: todoListScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-TodoList/",
    },
    {
      id: 9,
      name: "Restaurant Page",
      image: restaurantPage,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Restaurant-Page/",
    },
    {
      id: 10,
      name: "Tic-Tac-Toe Game",
      image: ticTacToeScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Tic-Tac-Toe/",
    },
    {
      id: 11,
      name: "Admin Dashboard",
      image: adminDashboardScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Admin-Dashboard/",
    },
    {
      id: 12,
      name: "Sign Up Form",
      image: signUpFormScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Sign-up-Form/",
    },
    {
      id: 13,
      name: "Calculator App",
      image: calculatorScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Calculator/",
    },
    {
      id: 14,
      name: "Etch a Sketch",
      image: etchASketchScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Etch-a-Sketch/",
    },
    {
      id: 15,
      name: "Landing Page",
      image: landingPageScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Landing-Page/",
    },
  ];

  useEffect(() => {
    setPortIsVisible(true);
  }, []);

  return (
    <>
      <PageTitle name="Portfolio" />
      <div className="project-container nav-container">
        <nav
          className={`fade-in staggered info-nav ${
            isPortVisible ? "visible" : ""
          }`}
        >
          <ul>
            <NavButton
              navButtons={navButtons}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>
        <div
          className={`fade-in staggered project-content ${
            isPortVisible ? "visible" : ""
          }`}
        >
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
