export default function ProfileDetail({ icon, label, value }) {
  return (
    <div className={`profile-detail ${label.toLowerCase()}`}>
      <img src={icon} alt="" loading="lazy" />
      <div className="detail-info">
        <span className="detail-label">{label}</span>
        {/* Let an email address wrap after the "@" instead of mid-word. */}
        <p>
          {value.includes("@") ? (
            <>
              {value.split("@")[0]}@<wbr />
              {value.split("@")[1]}
            </>
          ) : (
            value
          )}
        </p>
      </div>
    </div>
  );
}
