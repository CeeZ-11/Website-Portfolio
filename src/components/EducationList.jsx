import PropTypes from "prop-types";
export default function EducationList({ educList }) {
  return educList.map((educ) => (
    <li key={educ.id} className={`exp-info-container`}>
      <h3>{educ.school}</h3>
      <p className="resume-date">{educ.year}</p>
      <ul className="edu-ul-desc">
        <li className="edu-desc">{educ.desc}</li>
      </ul>
    </li>
  ));
}

EducationList.propTypes = {
  educList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      school: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
