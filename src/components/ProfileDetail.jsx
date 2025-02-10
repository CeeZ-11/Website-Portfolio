export default function ProfileDetail({ icon, label, value }) {
  return (
    <div className={`profile-detail ${label.toLowerCase()}`}>
      <img src={icon} alt={label} loading="lazy" />
      <div className="detail-info">
        <h5>{label}: </h5>
        <p>{value}</p>
      </div>
    </div>
  );
}
