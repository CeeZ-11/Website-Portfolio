export default function ProfileCard({ imageSrc, imageSrcSet, name, title }) {
  return (
    <div className="profile-card">
      <img src={imageSrc} srcSet={imageSrcSet} alt="profile" />
      <div className="profile-name">
        <h2>{name}</h2>
        <h4>{title}</h4>
      </div>
      <hr className="divider-line" />
    </div>
  );
}
