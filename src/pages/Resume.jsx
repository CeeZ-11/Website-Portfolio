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

 // Matches the Experience section of the LinkedIn profile (titles, companies and dates).
 const expList = [
    {
      id: 1,
      job: "Digital Marketing Analyst, PMW",
      date: "MAY 2026 - PRESENT",
      desc: [
        "Builds, maintains and optimizes websites in HTML, CSS, JavaScript, Liquid and Bootstrap, with a focus on technical SEO, performance, accessibility and scalability.",
        "Runs technical SEO audits, structured data and schema, on-page SEO, internal linking, Core Web Vitals and AI search readiness, plus GTM, GA4 and Microsoft Clarity tracking work.",
        "Built the Speed Engine, a TypeScript desktop app (Electron, Playwright, Lighthouse) that explains why pages are slow and what to fix first; teammates request deep audits from Slack, run in GitHub Actions.",
        "Built Analytics Health, a daily GA4 and Google Tag Manager check across hundreds of client sites with Slack alerts, a dashboard and monthly page-view reports.",
        "Built an SEO and AI-visibility scanner, and n8n automations for Microsoft Clarity rage-click alerts and a daily industry news digest.",
        "Maintains the team's shared Playwright + axe-core QA tool, is planning a QA automation platform, and shipped updates to the team's ION CMS extension for Cursor.",
      ],
    },
    {
      id: 2,
      job: "Web Developer | Digital Marketing Analyst, yesVIRTUAL",
      date: "MAR 2025 - APR 2026",
      desc: [
        "Built, maintained and optimized websites in HTML, CSS, JavaScript, Liquid and Bootstrap for client projects under PMW, working with the development and marketing teams.",
        "Led technical SEO: site audits, structured data, Core Web Vitals, on-page SEO, internal linking and schema validation for better search visibility and rich results.",
        "Managed AI/LLM search readiness through llms.txt and semantic summaries, and monitored sites with Google Search Console, Google Analytics and Grade.us.",
        "Used Cursor AI and Loom to streamline workflows and troubleshoot issues, and worked on internal initiatives to improve site performance and SEO processes.",
      ],
    },
    {
      id: 3,
      job: "Web Consultant, Experimentalist & Open Future Institute",
      date: "OCT 2024 - APR 2026",
      desc: "Managed and maintained WordPress and client websites: updates, design adjustments, performance optimization, structured data and technical SEO support. Worked with clients to improve functionality, crawlability and user experience.",
    },
    {
      id: 4,
      job: "Monitor Engineer, MID Construction Group",
      date: "MAY 2024 - OCT 2024",
      desc: "Monitored 45+ virtual sessions, tracked attendance, enforced rules, provided technical support and evaluated performance. Built tracking and reporting systems to optimize workflows and improve operational efficiency.",
    },
    {
      id: 5,
      job: "Logistics Coordinator, Rulewave",
      date: "SEP 2021 - JUN 2023",
      desc: "Optimized supply chain operations, managed customer inquiries, analyzed reports, tracked shipments and implemented process improvements. Developed data-driven insights to improve operational accuracy and logistics performance.",
    },
    {
      id: 6,
      job: "Information Technology Teacher, University of St. La Salle",
      date: "JUL 2017 - APR 2021",
      desc: "Taught web development fundamentals (HTML, CSS, JavaScript, PHP) and facilitated research methodology sessions. Developed lesson plans and projects to improve student engagement and practical learning.",
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
      school: "University of St. La Salle",
      year: "Jun 2013 - Mar 2017",
      desc: "Bachelor of Science in Information Technology, major in Web and Mobile Development, with a thesis on an Information Management System for Sacred Heart Shrine Lupit Church.",
    },
  ];

  // Internal PMW team trainings, grouped like the team training page. Titles only.
  const teamTrainings = [
    {
      group: "SEO",
      items: [
        { title: "AI Content Strategy: Writing Content That Wins SEO & AI Search", date: "Jul 29, 2026" },
        { title: "AI SEO Strategy 2026: Video Transcripts, Content Repurposing & Algorithm Shifts", date: "2026" },
        { title: "AI SEO for Property Management Websites: Ranking & Owner Leads" },
        { title: "AI SEO: Future-Proof Strategies, Workflows & Property Management Growth" },
        { title: "How AI Is Changing SEO" },
        { title: "Site Speed Optimization, Core Web Vitals & Website Performance" },
      ],
    },
    {
      group: "AI",
      items: [
        { title: "Claude AI Tools Explained", date: "Jun 3, 2026" },
        { title: "Design & AI Integrations: Claude, ChatGPT, Figma & Future Workflows", date: "2026" },
        { title: "Text.com AI Chatbot Walkthrough & Golden Website Templates" },
      ],
    },
    {
      group: "PMW Products",
      items: [{ title: "PMW Product Lineup: AMP, SEO Widgets, Reputation Management, Live Chat & More", date: "2026" }],
    },
    {
      group: "Property Management",
      items: [
        { title: "Client Journey: Onboarding to Retention, Tools & Automations", date: "Aug 26, 2026" },
        { title: "What Is Property Management?", date: "Jun 1, 2026" },
        { title: "AI & Property Management: Reviews, Trust Signals & SEO Strategy" },
      ],
    },
    {
      group: "DNS",
      items: [{ title: "DNS Explained: Domain Records, Email Authentication & Website Setup", date: "Jul 15, 2026" }],
    },
    {
      group: "PPC",
      items: [{ title: "PPC 101: Google Ads, Lead Generation & Paid Search Strategy", date: "Aug 12, 2026" }],
    },
    {
      group: "Compliance",
      items: [{ title: "Leveling Up Compliance at PMW & Rentvine: Accessibility, SEO & AI" }],
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
          <nav className="info-nav" aria-label="Additional information">
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
                <h3>Languages</h3>
                <ul>
                  <li> English - B2(Upper Intermediate)</li>
                  <li>Tagalog - Native or Bilingual</li>
                </ul>
              </>
            )}
            {activeTab === "certifications" && (
              <>
                <h3>Certifications</h3>
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
                <h3>PMW Team Trainings</h3>
                {teamTrainings.map(({ group, items }) => (
                  <div key={group} className="training-group">
                    <h4>{group}</h4>
                    <ul>
                      {items.map((t) => (
                        <li key={t.title}>
                          {t.title}
                          {t.date && <span className="training-date"> ({t.date})</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <h3>Other Trainings & Seminars</h3>
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
