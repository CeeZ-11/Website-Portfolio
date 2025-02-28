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
import TechStack from "../components/TechStack.jsx";
import PageTitle from "../components/PageTitle.jsx";

export default function About() {
  const techStackSkills = [
    { icon: JavaScriptIcon, name: "JavaScript (ES6+)" },
    { icon: ReactIcon, name: "React" },
    { icon: Html5Icon, name: "HTML5" },
    { icon: Css3Icon, name: "CSS3" },
    { icon: GitIcon, name: "Git" },
    { icon: GithubIcon, name: "Github" },
    { icon: NodejsIcon, name: "NodeJS" },
    { icon: WebpackIcon, name: "Webpack" },
    { icon: NpmIcon, name: "NPM" },
  ];

  return (
    <>
      <PageTitle name="About Me" />
      <div className={"intro"}>
        <p>
          Hi, I’m Seamor Estrabon, a passionate front-end developer
          transitioning from IT education and freelance web consulting into
          modern web development. I’m currently mastering React, JavaScript, and
          full-stack development through The Odin Project.
        </p>
      </div>

      <div className={`aboutC journey`}>
        <h2>My Journey</h2>
        <p>
          I started as an IT professor teaching HTML, CSS, JavaScript, and PHP
          before moving into freelance web consulting. Now, I’m focused on
          building modern, scalable applications and exploring mobile
          development in the future.
        </p>
      </div>

      <div className={`aboutC tech-stack-container`}>
        <h2>Tech Stack</h2>
        <ul className="tech-stack-list">
          {techStackSkills.map((tech) => (
            <TechStack key={tech.name} icon={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>

      <div className={`aboutC cur-learning`}>
        <h2>Currently Learning</h2>
        <ul>
          <li>Full-stack Development with Node.js & Express</li>
          <li>Mobile App Development (Future Goal)</li>
        </ul>
      </div>

      <div className={`aboutC projects`}>
        <h2>Currently Working On</h2>
        <p>
          Developing a full-featured School Management System using the MERN
          stack, enabling student enrollment, scheduling, attendance tracking,
          grade management, and role-based authentication with real-time
          notifications.
        </p>
      </div>
    </>
  );
}
