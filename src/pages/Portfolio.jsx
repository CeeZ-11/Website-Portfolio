import PageTitle from "../components/PageTitle";
import NavButton from "../components/NavButton";
import { useState } from "react";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all-projects");

  const navButtons = [
    { id: "all-projects", name: "All Projects" },
    { id: "odin-projects", name: "Odin Projects" },
    { id: "mini-projects", name: "Mini Projects" },
    { id: "personal-projects", name: "Personal Projects" },
    { id: "collaborations", name: "Collaborations" },
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
            <>
              <h4> All Projects </h4>
            </>
          )}
          {activeTab === "odin-projects" && (
            <>
              <h4> Odin Projects </h4>
            </>
          )}
          {activeTab === "mini-projects" && (
            <>
              <h4> Mini Projects </h4>
            </>
          )}
          {activeTab === "personal-projects" && (
            <>
              <h4> Personal Projects </h4>
            </>
          )}
          {activeTab === "collaborations" && (
            <>
              <h4> Collaborations </h4>
            </>
          )}
        </div>
      </div>
    </>
  );
}
