import { useEffect } from "react";

export default function ExperienceList({ expList, isVisible, setIsVisible }) {
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return expList.map((exp) => {
    return (
      <li
        key={exp.id}
        className={`fade-in staggered-experience exp-info-container ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="exp-details-head">
          <h4>{exp.job}</h4>
          <h5>{exp.date}</h5>
        </div>
        <ul className="resume-ul-desc">
          <li className="resume-desc">{exp.desc}</li>
        </ul>
      </li>
    );
  });
}
