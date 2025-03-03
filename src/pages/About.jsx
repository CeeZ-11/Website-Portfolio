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
          Hi, I&apos;m Seamor Estrabon, a front-end developer with a background
          in IT education and freelance web consulting. I earned a
          Bachelor&apos;s in Information Technology from the University of St.
          La Salle, where I built an &quot;Information Management System for
          Sacred Heart Shrine Lupit Church&quot; as my thesis. Currently,
          I&apos;m mastering React, JavaScript, and full-stack development
          through The Odin Project to create modern, scalable applications.
        </p>
      </div>

      <div className={`aboutC journey`}>
        <h2>My Journey</h2>
        <p>
          I began my career as an IT professor, teaching HTML, CSS, JavaScript,
          and PHP, helping students build a strong foundation in web
          development. Later, I transitioned into freelance web consulting,
          managing and optimizing WordPress-based websites for clients.
        </p>
        <p>
          Now, I’m fully focused on modern web development, continuously
          improving my skills in front-end technologies, UI/UX, and application
          scalability. In the future, I aim to explore mobile development to
          further expand my expertise.
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
        <h2>Expanding My Tech Stack</h2>
        <ul>
          <li>
            {" "}
            Full-stack Development – Completed JavaScript front-end curriculum
            in The Odin Project; currently learning back-end development with
            Node.js, Express, Authentication, ORMs, and APIs.{" "}
          </li>

          <li>
            Mobile App Development (Future Goal) – Planning to learn React
            Native, Flutter, Swift, Kotlin, Firebase, and other essential tools
            for cross-platform and native mobile app development.
          </li>
        </ul>
      </div>

      <div className={`aboutC projects`}>
        <h2>Major Projects in Development</h2>
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
