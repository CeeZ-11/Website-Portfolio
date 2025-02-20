import PageTitle from "../components/PageTitle";
import "../styles/Resume.css";
import { useState, useEffect } from "react";
import EducIcon from "../components/Icons/EducIcon";
import ExpIcon from "../components/Icons/ExpIcon";
import ExperienceList from "../components/ExperienceList.jsx";
import EducationList from "../components/EducationList.jsx";
import NavButton from "../components/NavButton.jsx";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  const [activeTab, setActiveTab] = useState("languages");

  const expList = [
    {
      id: 1,
      job: "Web Consultant (Freelance)",
      date: "OCT 2024 - PRESENT",
      desc: "Managed and maintained WordPress websites on GoDaddy, handling updates, design adjustments, performance optimization, and client collaboration.",
    },
    {
      id: 2,
      job: "Monitor Engineer, MID Construction Group",
      date: "MAY 2024 - OCT 2024",
      desc: "Monitored 45+ Google Meet sessions, tracked attendance, enforced rules, provided technical support, evaluated performance, and optimized workflows.",
    },
    {
      id: 3,
      job: "Logistics Coordinator, Rulewave",
      date: "September 2021 - June 2023",
      desc: "Optimized supply chain operations, managed customer inquiries, analyzed reports, tracked shipments, and improved logistics processes for efficiency.",
    },
    {
      id: 4,
      job: "Professor, University of St. La Salle",
      date: "July 2017 - April 2021",
      desc: "Taught HTML, CSS, PHP, and JavaScript, while also facilitating research methodology sessions to enhance students' programming and research skills.",
    },
  ];

  const educList = [
    {
      id: 1,
      school: "The Odin Project",
      year: "Nov 2023 - Present",
      desc: "Completed full-stack web development coursework, gaining hands-on experience with modern technologies and best practices.",
    },
    {
      id: 2,
      school: "University of St. La Salle ",
      year: "Jun 2013 - Mar 2017",
      desc: "Major in Web and Mobile Development, with a thesis on Information Management System for Sacred Heart Shrine Lupit Church.",
    },
  ];

  const navButtons = [
    { id: "languages", name: "Languages" },
    { id: "certifications", name: "Certifications" },
    { id: "trainings", name: "Trainings & Seminars" },
  ];

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <>
      <PageTitle name="Resume" />
      <div className="experience">
        <div className="exp-title">
          <div
            className={`fade-in staggered-experience resume-heads ${
              isVisible ? "visible" : ""
            }`}
          >
            <ExpIcon />
            <h2>Experience</h2>
          </div>

          <div
            className={`fade-in staggered-experience exp-info-container ${
              isVisible ? "visible" : ""
            }`}
          >
            <div className="exp-line"></div>
            <div className="exp-details">
              <ul>
                <ExperienceList
                  expList={expList}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <div className="edu-title">
          <div
            className={`fade-in staggered-education resume-heads ${
              isVisible ? "visible" : ""
            }`}
          >
            <EducIcon />
            <h2>Education</h2>
          </div>
          <div className="edu-info-container">
            <div className="edu-line"></div>
            <div className="edu-details">
              <ul>
                <EducationList
                  educList={educList}
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <div
          className={`fade-in staggered-info info-title ${
            isVisible ? "visible" : ""
          }`}
        >
          <h2>Additional Information</h2>
        </div>

        <div
          className={`fade-in staggered-info info-container nav-container ${
            isVisible ? "visible" : ""
          }`}
        >
          <nav className="info-nav">
            <ul>
              <NavButton
                navButtons={navButtons}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>
          </nav>
          <div className="info-content">
            {activeTab === "languages" && (
              <>
                <h4> Languages </h4>
                <ul>
                  <li> English - B2(Upper Intermediate)</li>
                  <li>Tagalog - Native or Bilingual</li>
                </ul>
              </>
            )}
            {activeTab === "certifications" && (
              <>
                <h4> Certifications </h4>
                <ul>
                  <li>SAP Business One Certification (Jan 2016)</li>
                  <li>Apple Teacher Certification (Oct 2019)</li>
                </ul>
              </>
            )}
            {activeTab === "trainings" && (
              <>
                <h4> Trainings & Seminars </h4>
                <ul>
                  <li>JobStreet.com – Jumpstart Session (2016)</li>
                  <li>Google I/O Seminar (2016)</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
