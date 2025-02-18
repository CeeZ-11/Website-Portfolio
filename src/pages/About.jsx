import "../styles/About.css";
import { useState, useEffect } from "react";
import JavaScriptIcon from "../components/Icons/JavscriptIcon";
import ReactIcon from "../components/Icons/ReactIcon";
import Html5Icon from "../components/Icons/Html5Icon";
import Css3Icon from "../components/Icons/Css3";
import GitIcon from "../components/Icons/GitIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import NodejsIcon from "../components/Icons/NodejsIcon";
import WebpackIcon from "../components/Icons/WebpackIcon";
import NpmIcon from "../components/Icons/NpmIcon";
import TechStack from "../components/TechStack.jsx";
import PageTitle from "../components/PageTitle.jsx";

export default function About() {
  const [isAboutVisible, setAboutIsVisible] = useState(false);

  const techStackSkills = [
    { icon: JavaScriptIcon, name: "JavaScript (ES6+)" },
    { icon: ReactIcon, name: "React (In Progress)" },
    { icon: Html5Icon, name: "HTML5" },
    { icon: Css3Icon, name: "CSS3" },
    { icon: GitIcon, name: "Git" },
    { icon: GithubIcon, name: "Github" },
    { icon: NodejsIcon, name: "NodeJS" },
    { icon: WebpackIcon, name: "Webpack" },
    { icon: NpmIcon, name: "NPM" },
  ];

  useEffect(() => {
    setAboutIsVisible(true);
  }, []);

  return (
    <>
      <PageTitle name="About Me" />
      <div
        className={`fade-in staggered intro ${isAboutVisible ? "visible" : ""}`}
      >
        <p>
          Hi, I’m Seamor Estrabon, a passionate front-end developertransitioning
          from IT education and freelance web consulting into modern web
          development. I’m currently mastering React, JavaScript, and full-stack
          development through The Odin Project.
        </p>
      </div>

      <div
        className={`fade-in staggered aboutC journey ${
          isAboutVisible ? "visible" : ""
        }`}
      >
        <h2>My Journey</h2>
        <p>
          I started as an IT professor teaching HTML, CSS, JavaScript, and PHP
          before moving into freelance web consulting. Now, I’m focused on
          building modern, scalable applications and exploring mobile
          development in the future.
        </p>
      </div>

      <div
        className={`fade-in staggered aboutC tech-stack-container ${
          isAboutVisible ? "visible" : ""
        }`}
      >
        <h2>Tech Stack</h2>
        <ul className="tech-stack-list">
          {techStackSkills.map((tech) => (
            <TechStack key={tech.name} icon={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>

      <div
        className={`fade-in staggered aboutC cur-learning ${
          isAboutVisible ? "visible" : ""
        }`}
      >
        <h2>Currently Learning</h2>
        <ul>
          <li>Advanced React (State Management, Context API)</li>
          <li>Full-stack Development with Node.js & Express</li>
          <li>Mobile App Development (Future Goal)</li>
        </ul>
      </div>
    </>
  );
}
