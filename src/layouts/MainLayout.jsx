import "../styles/MainLayout.css";
import profileImgSmall from "../assets/profile-small.webp";
import profileImgLarge from "../assets/profile-large.webp";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import addressIcon from "../assets/address.svg";
import birthdateIcon from "../assets/birthdate.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import facebookIcon from "../assets/facebook.svg";

export default function MainLayout() {
  return (
    <div className="Main">
      <aside>
        <div className="profile-card">
          <img
            src={profileImgSmall}
            srcSet={`${profileImgSmall} 200w, ${profileImgLarge} 300w`}
            alt="profile"
          />
          <div className="profile-name">
            <h2>Seamor Estrabon</h2>
            <h4>Front-End Developer</h4>
          </div>
          <hr className="divider-line" />
        </div>
        <div className="profile-details">
          <div className="email">
            <img src={emailIcon} alt="email" loading="lazy" />
            <div className="email-details">
              <h5>Email: </h5>
              <p>seamorestrabon@gmail.com</p>
            </div>
          </div>
          <div className="phone">
            <img src={phoneIcon} alt="phone" loading="lazy" />
            <div className="phone-details">
              <h5>Phone: </h5>
              <p>+639270664116</p>
            </div>
          </div>
          <div className="birthdate">
            <img src={birthdateIcon} alt="birthdate" loading="lazy" />
            <div className="address-details">
              <h5>Birthdate: </h5>
              <p>December 11, 1996</p>
            </div>
          </div>
          <div className="address">
            <img src={addressIcon} alt="address" loading="lazy" />
            <div className="address-details">
              <h5>Address: </h5>
              <p>Bacolod City, Philippines</p>
            </div>
          </div>
        </div>
        <hr className="divider-line" />
        <div className="profile-socials">
          <a href="https://www.linkedin.com/in/seamor-estrabon-771247172/">
            <img src={linkedinIcon} alt="LinkedIn" loading="lazy" />
          </a>
          <a href="https://github.com/CeeZ-11">
            <img src={githubIcon} alt="Github" loading="lazy" />
          </a>
          <a href="https://www.facebook.com/seaznoquera2/">
            <img src={facebookIcon} alt="Facebook" loading="lazy" />
          </a>
        </div>
      </aside>
      <main>
        <h1>Main</h1>
      </main>
    </div>
  );
}
