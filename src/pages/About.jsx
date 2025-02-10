export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <hr className="header-line" />
      <p className="text-lg">
        Hi, I’m <span className="name">Seamor Estrabon</span>, a passionate
        **front-end developer** transitioning from IT education and freelance
        web consulting into modern web development. I’m currently mastering
        **React, JavaScript, and full-stack development** through The Odin
        Project.
      </p>

      <h2>My Journey</h2>
      <p>
        I started as an IT professor teaching **HTML, CSS, JavaScript, and PHP**
        before moving into **freelance web consulting**. Now, I’m focused on
        building modern, scalable applications and exploring **mobile
        development** in the future.
      </p>

      <h2>Tech Stack</h2>
      <div className="tech-stack-container">
        <div className="tech-stack">JavaScript (ES6+)</div>
        <div className="tech-stack">React (In Progress)</div>
        <div className="tech-stack">HTML5 & CSS3</div>
        <div className="tech-stack">Git & GitHub</div>
        <div className="tech-stack">API Integration</div>
        <div className="tech-stack">Webpack & npm</div>
      </div>

      <h2>Currently Learning</h2>
      <p>
        - Advanced React (State Management, Context API) - Full-stack
        Development with Node.js & Express - Mobile App Development (Future
        Goal)
      </p>
    </div>
  );
}
