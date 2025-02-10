import PageTitle from "../components/PageTitle";
import { useState } from "react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <>
      <PageTitle name="Resume" />
      <div className="experience">
        <div className="exp-title">
          <h2>Experience</h2>
          <div className="exp-info-container">
            <div className="exp-line"></div>
            <div className="exp-details">
              <ul>
                <li>
                  <h4>Web Consultant (Freelance) </h4>
                  <h5>OCT 2024 - PRESENT</h5>
                  <ul>
                    <li>
                      Maintained and managed client websites hosted on GoDaddy
                      and built on WordPress, ensuring reliability and uptime.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="education">
        <div className="edu-title">
          <h2>Education</h2>
          <div className="edu-info-container">
            <div className="edu-line"></div>
            <div className="edu-details">
              <ul>
                <li>
                  <h4>The Odin Project Curriculum</h4>
                  <h5>Nov 2023 - Present</h5>
                  <ul>
                    <li>
                      Comprehensive coursework covering full-stack web
                      development.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h2>Additional Information</h2>
        <nav className="info-nav">
          <ul>
            <li>
              <button
                onClick={() => setActiveTab("languages")}
                className={activeTab === "languages" ? "active" : ""}
              >
                Languages
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("certifications")}
                className={activeTab === "certifications" ? "active" : ""}
              >
                Certifications
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("trainings")}
                className={activeTab === "trainings" ? "active" : ""}
              >
                Trainings & Seminars
              </button>
            </li>
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
    </>
  );
}
