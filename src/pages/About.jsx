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
        <h2>
          Hi, I’m Seamor Estrabon <span className="wave">👋</span>
        </h2>

        <p>
          A Front-end Developer with a background in IT education and freelance
          web consulting. I hold a{" "}
          <strong>Bachelor’s in Information Technology</strong> from the
          University of St. La Salle, where I developed an Information
          Management System for my thesis.
        </p>
        <p>
          Currently, I’m advancing my skills in{" "}
          <strong>React and full-stack development </strong>
          through The Odin Project to build scalable, modern applications.
        </p>
      </div>

      <div className={`aboutC journey`}>
        <h2>My Journey 🚀</h2>
        <p>
          I began my career as an IT teacher, teaching HTML, CSS, JavaScript,
          and PHP, helping students build a strong foundation in web
          development. Later, I transitioned into freelance web consulting,
          managing and optimizing WordPress-based websites for clients.
        </p>
        <p>
          Now, I’m fully focused on modern web development, continuously
          improving my skills in
          <strong> front-end technologies</strong> and{" "}
          <strong>application scalability</strong>. In the future, I aim to
          explore <strong>mobile development</strong> to further expand my
          expertise.
        </p>
      </div>

      <div className={`aboutC tech-stack-container`}>
        <h2>Tech Stack 🛠️</h2>
        <ul className="tech-stack-list">
          {techStackSkills.map((tech) => (
            <TechStack key={tech.name} icon={tech.icon} name={tech.name} />
          ))}
        </ul>
      </div>

      <div className={`aboutC cur-learning`}>
        <h2>Expanding My Tech Stack 📚</h2>
        <ul>
          <li>
            <strong>Full-stack Development:</strong> Completed JavaScript
            front-end curriculum in The Odin Project; now learning{" "}
            <strong>Node.js, Express, Authentication, ORMs, and APIs</strong>.
          </li>
          <li>
            <strong>Mobile App Development (Future Goal):</strong> Planning to
            learn{" "}
            <strong>React Native, Flutter, Swift, Kotlin, and Firebase</strong>{" "}
            for cross-platform and native app development.
          </li>
        </ul>
      </div>

      <div className={`aboutC projects`}>
        <h2>Major Projects in Development 🏗️</h2>
        <ul>
          <li>
            <strong>School Management System (MERN stack)</strong>
          </li>
          <ul>
            <li>✅ Student Enrollment</li>
            <li>✅ Scheduling & Attendance Tracking</li>
            <li>✅ Grade Management</li>
            <li>✅ Role-based Authentication & Real-time Notifications</li>
          </ul>
        </ul>
      </div>
    </>
  );
}
