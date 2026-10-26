import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import { useState } from "react";
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
import weddingRsvp from "../assets/weddingRsvp.png";
import shoppingCartScreenshot from "../assets/shopping-cart.webp";
import wedSnapScreenshot from "../assets/wedsnap.webp";
import schoolManagerScreenshot from "../assets/school-manager.webp";
import speedEngineDemoScreenshot from "../assets/speed-engine-demo.webp";
import visibilityDemoScreenshot from "../assets/visibility-demo.webp";
import analyticsHealthDemoScreenshot from "../assets/analytics-health-demo.webp";
import siteQaDemoScreenshot from "../assets/site-qa-demo.webp";
import commandCenterDemoScreenshot from "../assets/command-center-demo.webp";


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all-projects");

  const navButtons = [
    { id: "all-projects", name: "All Projects" },
    { id: "work-projects", name: "Work Projects" },
    { id: "odin-projects", name: "Odin Projects" },
    { id: "mini-projects", name: "Mini Projects" },
    { id: "personal-projects", name: "Personal Projects" },
    { id: "collaborations", name: "Collaborations" },
  ];

  const projectList = [
    {
      id: 20,
      name: "Speed Engine (demo)",
      image: speedEngineDemoScreenshot,
      category: "work-projects",
      url: "/demos/speed-engine/index.html",
    },
    {
      id: 21,
      name: "Visibility Scanner (demo)",
      image: visibilityDemoScreenshot,
      category: "work-projects",
      url: "/demos/visibility/index.html",
    },
    {
      id: 22,
      name: "Analytics Health (demo)",
      image: analyticsHealthDemoScreenshot,
      category: "work-projects",
      url: "/demos/analytics-health/index.html",
    },
    {
      id: 23,
      name: "Site QA (demo)",
      image: siteQaDemoScreenshot,
      category: "work-projects",
      url: "/demos/site-qa/index.html",
    },
    {
      id: 24,
      name: "Command Center (demo)",
      image: commandCenterDemoScreenshot,
      category: "work-projects",
      url: "/demos/command-center/index.html",
    },
    {
      id: 1,
      name: "Shopping Cart",
      image: shoppingCartScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Shopping-Cart/",
    },
    {
      id: 2,
      name: "Memory Card",
      image: memoryCardScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Memory-Card/",
    },
    {
      id: 3,
      name: "CV Application",
      image: cvApplicationScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-CV-Application/",
    },
    {
      id: 4,
      name: "Weather App",
      image: weatherAppScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Weather-App/",
    },
    {
      id: 5,
      name: "Pokemon Guessing Game",
      image: pokemonGuessingGameScreenshot,
      category: "mini-projects",
      url: "https://ceez-11.github.io/Pokemon-Guessing-Game/",
    },
    {
      id: 6,
      name: "Battleship Game",
      image: battleShipScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Battleship/",
    },
    {
      id: 7,
      name: "Rock Paper Scissors Game",
      image: rockPaperScissorsScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Rock-Paper-Scissors/",
    },
    {
      id: 8,
      name: "Library App",
      image: libraryScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Library/",
    },
    {
      id: 9,
      name: "Todo List App",
      image: todoListScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-TodoList/",
    },
    {
      id: 10,
      name: "Restaurant Page",
      image: restaurantPage,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Restaurant-Page/",
    },
    {
      id: 11,
      name: "Tic-Tac-Toe Game",
      image: ticTacToeScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Tic-Tac-Toe/",
    },
    {
      id: 12,
      name: "Admin Dashboard",
      image: adminDashboardScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Admin-Dashboard/",
    },
    {
      id: 13,
      name: "Sign Up Form",
      image: signUpFormScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Sign-up-Form/",
    },
    {
      id: 14,
      name: "Calculator App",
      image: calculatorScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Calculator/",
    },
    {
      id: 15,
      name: "Etch a Sketch",
      image: etchASketchScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Etch-a-Sketch/",
    },
    {
      id: 16,
      name: "Landing Page",
      image: landingPageScreenshot,
      category: "odin-projects",
      url: "https://ceez-11.github.io/Odin-Project-Landing-Page/",
    },
    {
      id: 17,
      name: "Wedding RSVP",
      image: weddingRsvp,
      category: "personal-projects",
      url: "https://wedding-rsvp-bay-iota.vercel.app/",
    },
    {
      id: 18,
      name: "WedSnap",
      image: wedSnapScreenshot,
      category: "personal-projects",
      url: "https://wed-snap-nine.vercel.app/",
    },
    {
      id: 19,
      name: "School Manager",
      image: schoolManagerScreenshot,
      category: "personal-projects",
      // The live build is only a login screen without its backend, so link the code.
      url: "https://github.com/CeeZ-11/School-Manager",
    },
  ];

  return (
    <>
      <PageTitle name="Portfolio" />
      <div className="project-container nav-container">
        <nav className={`info-nav`}>
          <ul>
            <NavButton
              navButtons={navButtons}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>
        <div className={`project-content`}>
          {activeTab === "all-projects" && (
            <Projects projectList={projectList} />
          )}
          {activeTab === "work-projects" && (
            <Projects
              projectList={projectList.filter(
                (project) => project.category === "work-projects"
              )}
            />
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
