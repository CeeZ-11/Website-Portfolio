import PropTypes from "prop-types";
import { useEffect } from "react";
export default function EducationList({ educList, isVisible, setIsVisible }) {
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return educList.map((educ) => (
    <li
      key={educ.id}
      className={`fade-in staggered-education exp-info-container ${
        isVisible ? "visible" : ""
      }`}
    >
      <h4>{educ.school}</h4>
      <h5>{educ.year}</h5>
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
