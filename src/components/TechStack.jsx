export default function TechStack({ icon: Icon, name }) {
  return (
    <li className="tech-stack">
      <Icon /> {name}
    </li>
  );
}
