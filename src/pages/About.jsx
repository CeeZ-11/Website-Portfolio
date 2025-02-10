import "../styles/About.css";
import JavaScriptIcon from "../components/Icons/JavscriptIcon";
import ReactIcon from "../components/Icons/ReactIcon";
import Html5Icon from "../components/Icons/Html5Icon";
import Css3Icon from "../components/Icons/Css3";
import GitIcon from "../components/Icons/GitIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import NodejsIcon from "../components/Icons/NodejsIcon";
import WebpackIcon from "../components/Icons/WebpackIcon";
import NpmIcon from "../components/Icons/NpmIcon";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <hr className="header-line" />
      </div>

      <div className="intro">
        <p>
          Hi, I’m <span className="name">Seamor Estrabon</span>, a passionate
          **front-end developer** transitioning from IT education and freelance
          web consulting into modern web development. I’m currently mastering
          **React, JavaScript, and full-stack development** through The Odin
          Project.
        </p>
      </div>

      <div className="aboutC journey">
        <h2>My Journey</h2>
        <p>
          I started as an IT professor teaching **HTML, CSS, JavaScript, and
          PHP** before moving into **freelance web consulting**. Now, I’m
          focused on building modern, scalable applications and exploring
          **mobile development** in the future.
        </p>
      </div>

      <div className="aboutC tech-stack-container">
        <h2>Tech Stack</h2>
        <ul className="tech-stack-list">
          <li className="tech-stack">
            <JavaScriptIcon /> JavaScript (ES6+)
          </li>
          <li className="tech-stack">
            <ReactIcon /> React (In Progress)
          </li>
          <li className="tech-stack">
            <Html5Icon /> HTML5
          </li>
          <li className="tech-stack">
            <Css3Icon /> CSS3
          </li>
          <li className="tech-stack">
            <GitIcon /> Git
          </li>
          <li className="tech-stack">
            <GithubIcon /> GitHub
          </li>
          <li className="tech-stack">
            <NodejsIcon /> NodeJS
          </li>
          <li className="tech-stack">
            <WebpackIcon /> Webpack
          </li>
          <li className="tech-stack">
            <NpmIcon /> npm
          </li>
        </ul>
      </div>

      <div className="aboutC cur-learning">
        <h2>Currently Learning</h2>
        <ul>
          <li>Advanced React (State Management, Context API)</li>
          <li>Full-stack Development with Node.js & Express</li>
          <li>Mobile App Development (Future Goal)</li>
        </ul>
      </div>
    </div>
  );
}
