import "../styles/MainLayout.css";
import profileImg from "../assets/profile.webp";

export default function MainLayout() {
  return (
    <div className="Main">
      <aside>
        <div className="profile-card">
          <img src={profileImg} alt="profile" />
          <div className="profile-name">
            <h2>Seamor Estrabon</h2>
            <hr className="short-line" />
            <h4>Front-End Developer</h4>
          </div>
        </div>
      </aside>
      <main>
        <h1>Main</h1>
      </main>
    </div>
  );
}
