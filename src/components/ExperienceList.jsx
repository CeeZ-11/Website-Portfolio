export default function ExperienceList({ expList }) {
  return expList.map((exp) => {
    // A job can have one paragraph or a list of bullet points.
    const points = Array.isArray(exp.desc) ? exp.desc : [exp.desc];
    return (
      <li key={exp.id} className={`exp-info-container`}>
        <div className="exp-details-head">
          <h3>{exp.job}</h3>
          <p className="resume-date">{exp.date}</p>
        </div>
        <ul className={`resume-ul-desc ${points.length > 1 ? "resume-points" : ""}`}>
          {points.map((point) => (
            <li key={point} className="resume-desc">
              {point}
            </li>
          ))}
        </ul>
      </li>
    );
  });
}
