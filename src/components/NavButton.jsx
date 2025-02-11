export default function NavButton({ navButtons, activeTab, setActiveTab }) {
  return navButtons.map((button) => (
    <li key={button.id}>
      <button
        onClick={() => setActiveTab(`${button.id}`)}
        className={activeTab === `${button.id}` ? "active" : ""}
      >
        {button.name}
      </button>
    </li>
  ));
}
