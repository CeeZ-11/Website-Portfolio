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
          A <strong>Front-End Developer & Technical SEO Specialist</strong>  with a background in IT education and digital marketing operations. I hold a{" "}
          <strong>Bachelor’s in Information Technology</strong> from the
          University of St. La Salle, where I specialized in Web and Mobile Development.
        </p>

        <p>
          Currently, I am a{" "}
          <strong>Web Developer & Digital Marketing Analyst at YesVIRTUAL (PMW)</strong>,
          where I bridge the gap between clean code and search visibility. My work focuses on building high-performance websites using <strong>HTML, CSS, JavaScript, and Liquid</strong>, while implementing advanced optimizations for <strong>Core Web Vitals, accessibility (ADA), and AI/LLM search readiness</strong>].
        </p>
      </div>

      <div className={`aboutC journey`}>
        <h2>My Journey 🚀</h2>

        <p>
          My foundation began as an <strong>IT Instructor</strong>, where I taught web development and mentored students on technical research. This passion for technical clarity led me into <strong>freelance web consulting</strong>, where I managed end-to-end WordPress solutions, domain configurations, and SEO strategies for small businesses.
        </p>

        <p>
          Today, I specialize in <strong>Technical SEO Engineering</strong>—ensuring that modern web applications are not only responsive but also fully discoverable through <strong>structured data (JSON-LD) and semantic SEO</strong>. 
        </p>
        
        <p>
          I am currently deepening my expertise in the <strong>MERN stack</strong> through The Odin Project, with a long-term focus on building scalable, full-stack applications and exploring <strong>mobile development</strong>.
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
