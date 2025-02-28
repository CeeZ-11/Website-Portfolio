export default function ExperienceList({ expList }) {
  return expList.map((exp) => {
    return (
      <li key={exp.id} className={`exp-info-container`}>
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
