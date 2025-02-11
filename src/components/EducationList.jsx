export default function EducationList({ educList }) {
  return educList.map((educ) => (
    <li key={educ.id}>
      <h4>{educ.school}</h4>
      <h5>{educ.year}</h5>
      <ul className="edu-ul-desc">
        <li className="edu-desc">{educ.desc}</li>
      </ul>
    </li>
  ));
}
