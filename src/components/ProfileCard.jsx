export default function ProfileCard({ imageSrc, imageSrcSet, imageSizes, name, title }) {
  return (
    <div className="profile-card">
      <img src={imageSrc} srcSet={imageSrcSet} sizes={imageSizes} alt={`${name}'s profile photo`} width="200" height="250" />
      <div className="profile-name">
        <h2>{name}</h2>
        <h4>{title}</h4>
      </div>
      <hr className="divider-line" />
    </div>
  );
}
