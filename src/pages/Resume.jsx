import PageTitle from "../components/PageTitle";
import "../styles/Resume.css";
import { useState } from "react";
import EducIcon from "../components/Icons/EducIcon";
import ExpIcon from "../components/Icons/ExpIcon";
import ExperienceList from "../components/ExperienceList.jsx";
import EducationList from "../components/EducationList.jsx";
import NavButton from "../components/NavButton.jsx";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("languages");

 const expList = [
    {
      id: 1,
      job: "Web Developer / Digital Marketing Analyst, YesVIRTUAL (PMW)",
      date: "MARCH 2025 - PRESENT",
      desc: "Develops and maintains high-performance websites using HTML, CSS, JavaScript, and Liquid. Integrates technical SEO best practices, including JSON-LD structured data and AI/LLM-facing signals (llms.txt), to maximize search visibility and rich result eligibility. Optimizes Core Web Vitals and ADA compliance to ensure superior user experience and accessibility.",
    },
    {
      id: 2,
      job: "Web Consultant (Freelance)",
      date: "OCT 2024 - PRESENT",
      desc: "Provides end-to-end web services including WordPress development, performance optimization, and domain/DNS management. Implements full-spectrum SEO strategies covering crawlability, indexation, and on-page optimization for small business clients.",
    },
    {
      id: 3,
      job: "Monitor Engineer, MID Construction Group",
      date: "MAY 2024 - OCT 2024",
      desc: "Managed digital security and auditing through daily log monitoring to ensure data policy compliance. Provided technical support for remote operations and built tracking systems to report on system performance metrics.",
    },
    {
      id: 4,
      job: "Logistics Coordinator & Data Analyst, Rulewave",
      date: "SEPTEMBER 2021 - JUNE 2023",
      desc: "Audited logistics databases to maintain data integrity and automated digital workflows to reduce manual entry errors. Generated weekly performance reports and optimized supply chain documentation processes.",
    },
    {
      id: 5,
      job: "IT Teacher / ICT Instructor, University of St. La Salle",
      date: "JULY 2017 - APRIL 2021",
      desc: "Instructed Senior High students in Web Development (HTML, CSS, JS) and digital literacy. Mentored students on technical documentation and research methodologies for complex IT thesis projects.",
    },
  ];

  const educList = [
    {
      id: 1,
      school: "The Odin Project",
      year: "Nov 2023 - Present",
      desc: "Currently studying full-stack web development. Completed the front-end portion and now focusing on backend development, gaining hands-on experience with modern technologies and best practices.",
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

  return (
    <>
      <PageTitle name="Resume" />
      <div className="experience">
        <div className="exp-title">
          <div className={`resume-heads`}>
            <ExpIcon />
            <h2>Experience</h2>
          </div>

          <div className={`exp-info-container`}>
            <div className="exp-line"></div>
            <div className="exp-details">
              <ul>
                <ExperienceList expList={expList} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <div className="edu-title">
          <div className={`resume-heads`}>
            <EducIcon />
            <h2>Education</h2>
          </div>
          <div className="edu-info-container">
            <div className="edu-line"></div>
            <div className="edu-details">
              <ul>
                <EducationList educList={educList} />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <div className={` info-title`}>
          <h2>Additional Information</h2>
        </div>

        <div className={` info-container nav-container`}>
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
                  <li>SEO Essentials - Semrush (2025)</li>
                  <li>SEO Fundamentals - Semrush (2025)</li>
                  <li>Local SEO - Semrush (2025)</li>
                  <li>SAP Business One Certification (2016)</li>
                  <li>Apple Teacher Certification (2019)</li>
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
