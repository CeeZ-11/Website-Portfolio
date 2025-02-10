import "../styles/About.css";

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
        <div className="tech-stack-list">
          <div className="tech-stack">JavaScript (ES6+)</div>
          <div className="tech-stack">React (In Progress)</div>
          <div className="tech-stack">HTML5 & CSS3</div>
          <div className="tech-stack">Git & GitHub</div>
          <div className="tech-stack">API Integration</div>
          <div className="tech-stack">Webpack & npm</div>
        </div>
      </div>

      <div className="aboutC cur-learning">
        <h2>Currently Learning</h2>
        <p>
          - Advanced React (State Management, Context API) - Full-stack
          Development with Node.js & Express - Mobile App Development (Future
          Goal)
        </p>
      </div>
    </div>
  );
}
