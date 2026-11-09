export default function ProfileCard({ imageSrc, imageSrcSet, imageSizes, name, title }) {
  return (
    <div className="profile-card">
      <img src={imageSrc} srcSet={imageSrcSet} sizes={imageSizes} alt={`${name}'s profile photo`} width="200" height="250" />
      <div className="profile-name">
        <h2>{name}</h2>
        {/* A "A | B | C" headline shows one part per line; the separators stay in the text. */}
        <p className="profile-title">
          {title.split(" | ").map((part, i, parts) => (
            <span key={part} className="title-part">
              {part}
              {i < parts.length - 1 && <span className="title-sep"> | </span>}
            </span>
          ))}
        </p>
      </div>
      <hr className="divider-line" />
    </div>
  );
}
