import React, { Suspense } from "react";
import "../styles/MainLayout.css";
import { Link, Route, Routes } from "react-router-dom";
import profileImgSmall from "../assets/profile-small.webp";
import profileImgLarge from "../assets/profile-large.webp";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import addressIcon from "../assets/address.svg";
import birthdateIcon from "../assets/birthdate.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import facebookIcon from "../assets/facebook.svg";
import ProfileCard from "../components/ProfileCard.jsx";
import ProfileDetail from "../components/ProfileDetail.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
const About = React.lazy(() => import("../pages/About.jsx"));
const Resume = React.lazy(() => import("../pages/Resume.jsx"));
const Portfolio = React.lazy(() => import("../pages/Portfolio.jsx"));
const Contact = React.lazy(() => import("../pages/Contact.jsx"));

export default function MainLayout() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/seamor-estrabon-771247172/",
      icon: linkedinIcon,
      name: "LinkedIn",
    },
    {
      href: "https://github.com/CeeZ-11",
      icon: githubIcon,
      name: "GitHub",
    },
    {
      href: "https://www.facebook.com/seaznoquera2/",
      icon: facebookIcon,
      name: "Facebook",
    },
  ];

  const profileDetails = [
    { icon: emailIcon, label: "Email", value: "seamorestrabon@gmail.com" },
    { icon: phoneIcon, label: "Phone", value: "+639270664116" },
    { icon: birthdateIcon, label: "Birthdate", value: "December 11, 1996" },
    { icon: addressIcon, label: "Address", value: "Bacolod City, Philippines" },
  ];

  return (
    <div className="Main">
      <aside>
        <ProfileCard
          imageSrc={profileImgSmall}
          imageSrcSet={`${profileImgSmall} 200w, ${profileImgLarge} 300w`}
          name="Seamor Estrabon"
          title="Front-End Developer"
        />
        <div className="profile-details">
          {profileDetails.map((detail) => (
            <ProfileDetail
              key={detail.label}
              icon={detail.icon}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
        <hr className="divider-line" />
        <SocialLinks links={socialLinks} />
      </aside>
      <main>
        <h1>Main</h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<About />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
