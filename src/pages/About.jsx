import "../styles/About.css";
import JavaScriptIcon from "../components/Icons/JavscriptIcon";
import ReactIcon from "../components/Icons/ReactIcon";
import Html5Icon from "../components/Icons/Html5Icon";
import Css3Icon from "../components/Icons/Css3";
import GitIcon from "../components/Icons/GitIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import NodejsIcon from "../components/Icons/NodejsIcon";
import NpmIcon from "../components/Icons/NpmIcon";
import TechStack from "../components/TechStack.jsx";
import PageTitle from "../components/PageTitle.jsx";

export default function About() {
  const techStackSkills = [
    { icon: Html5Icon, name: "HTML5" },
    { icon: Css3Icon, name: "CSS3" },
    { icon: JavaScriptIcon, name: "JavaScript (ES6+)" },
    { icon: ReactIcon, name: "React" },
    { icon: NodejsIcon, name: "Node.js" },
    { icon: GitIcon, name: "Git" },
    { icon: GithubIcon, name: "GitHub" },
    { icon: NpmIcon, name: "NPM" },
  ];

  const skillGroups = [
    {
      name: "Front-end",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Vite", "Bootstrap", "Tailwind CSS", "Liquid", "three.js"],
    },
    {
      name: "Back-end & hosting",
      skills: ["Node.js", "Electron", "SQLite", "Cloudflare Workers & D1", "Firebase", "Google Apps Script", "Vercel", "GitHub Pages"],
    },
    {
      name: "Technical SEO & performance",
      skills: [
        "Core Web Vitals",
        "Lighthouse",
        "PageSpeed Insights & CrUX",
        "JSON-LD structured data",
        "AI search readiness (llms.txt)",
        "Google Search Console",
        "Semrush",
        "Ahrefs",
      ],
    },
    {
      name: "Analytics",
      skills: ["Google Analytics 4", "Google Tag Manager", "GA4 Data API", "Microsoft Clarity"],
    },
    {
      name: "Testing & quality",
      skills: ["Playwright", "axe-core (accessibility / ADA)", "Chrome DevTools Protocol", "Vitest", "ESLint", "Prettier"],
    },
    {
      name: "Automation & AI",
      skills: ["n8n", "GitHub Actions", "Slack apps & webhooks", "Claude Code", "Cursor", "Gemini & OpenAI APIs", "Magic Patterns"],
    },
    {
      name: "Mobile",
      skills: ["React Native", "Expo"],
    },
    {
      name: "Tools",
      skills: ["Git & GitHub", "npm", "monday.com", "WordPress", "Grade.us", "Loom", "DNS & domain setup"],
    },
  ];

  const currentWork = [
    {
      name: "Speed Engine",
      text: "a desktop app that finds why a page is slow and what to fix first, built with TypeScript, Playwright, Lighthouse and Electron. Teammates can also request deep audits from Slack.",
    },
    {
      name: "Analytics Health",
      text: "a daily check that Google Analytics and Tag Manager still work on hundreds of client sites, with alerts in Slack and a team dashboard.",
    },
    {
      name: "Visibility Scanner",
      text: "free SEO and AI-search checks turned into a weekly report: crawler access, sitemaps, key pages and structured data.",
    },
    {
      name: "Site QA",
      text: "automated pre-launch checks with Playwright and axe-core, and a plan for a team-wide QA automation platform.",
    },
    {
      name: "n8n automations",
      text: "rage-click alerts from Microsoft Clarity and a daily industry news digest, both posted to Slack.",
    },
    {
      name: "Command Center",
      text: "my own work dashboard on Cloudflare Workers, with an AI morning briefing and a 3D character that levels up with finished work.",
    },
  ];

  return (
    <>
      <PageTitle name="About Me" />
      <div className={"intro"}>
        <h2>
          Hi, I’m Seamor Estrabon <span className="wave">👋</span>
        </h2>

        <p>
          I’m a <strong>Web Developer and Digital Marketing Analyst</strong> focused on building better websites,
          improving search performance, and <strong>using automation to make technical workflows more efficient</strong>.
          My work combines front-end development, technical SEO, analytics and website performance optimization.
        </p>

        <p>
          I work with <strong>HTML, CSS, JavaScript, Liquid, Bootstrap</strong> and custom CMS platforms. My
          experience includes <strong>technical SEO audits, structured data, Core Web Vitals, internal linking,
          accessibility and AI search readiness</strong>, and I use Google Tag Manager, Google Analytics 4, Google
          Search Console and Microsoft Clarity to improve tracking and measurement.
        </p>

        <p>
          Beyond development and SEO, I build <strong>automation workflows and internal tools</strong> with{" "}
          <strong>n8n, GitHub Actions, Slack integrations</strong> and AI-assisted development tools like{" "}
          <strong>Claude Code and Cursor</strong>. They streamline PageSpeed monitoring, technical audits, reporting and
          repetitive tasks. I hold a <strong>Bachelor’s in Information Technology</strong> from the University of St. La
          Salle, majoring in Web and Mobile Development.
        </p>
      </div>

      <div className={`aboutC projects`}>
        <h2>What I’m Working On 🏗️</h2>
        <p>
          Tools I’ve built at work in 2026. Each one has a live demo, using my own sites or sample data, under{" "}
          <a href="#/portfolio">Portfolio → Work Projects</a>.
        </p>
        <ul className="current-work">
          {currentWork.map((item) => (
            <li key={item.name}>
              <strong>{item.name}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className={`aboutC journey`}>
        <h2>My Journey 🚀</h2>

        <p>
          I started as an <strong>IT Instructor</strong>, teaching senior high students web development and guiding
          their IT research. I then spent a few years in <strong>data and operations roles</strong>, auditing databases,
          automating workflows and monitoring systems.
        </p>

        <p>
          That led me into <strong>freelance web consulting</strong>: WordPress builds, performance work, domains and
          DNS, and SEO for small businesses. Since 2025 I’ve been working on PMW websites, building them and, more and
          more, the automation and testing tools behind them.
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

      <div className={`aboutC skills`}>
        <h2>Skills & Tools 🧰</h2>
        {skillGroups.map((group) => (
          <div key={group.name} className="skill-group">
            <h3>{group.name}</h3>
            <ul className="skill-chips">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`aboutC cur-learning`}>
        <h2>Still Learning 📚</h2>
        <ul>
          <li>
            <strong>Full-stack development:</strong> continuing The Odin Project’s back-end path (Express,
            authentication, databases and APIs).
          </li>
          <li>
            <strong>Mobile development:</strong> React Native and Expo, starting with a school app prototype.
          </li>
        </ul>
      </div>
    </>
  );
}
