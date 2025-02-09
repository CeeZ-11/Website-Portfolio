import "../styles/MainLayout.css";
import profileImg from "../assets/profile.webp";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import addressIcon from "../assets/address.svg";

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
        <hr className="divider-line" />
        <div className="profile-details">
          <div className="email">
            <img src={emailIcon} alt="email" />
            <div className="email-details">
              <h5>Email: </h5>
              <p>seamorestrabon@gmail.com</p>
            </div>
          </div>
          <div className="phone">
            <img src={phoneIcon} alt="phone" />
            <div className="phone-details">
              <h5>Phone: </h5>
              <p>+639270664116</p>
            </div>
          </div>
          <div className="address">
            <img src={addressIcon} alt="address" />
            <div className="address-details">
              <h5>Address: </h5>
              <p>Bacolod City, Philippines</p>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <h1>Main</h1>
      </main>
    </div>
  );
}
