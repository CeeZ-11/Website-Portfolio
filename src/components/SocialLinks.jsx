export default function SocialLinks({ links }) {
  return (
    <div className="profile-socials">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.icon} alt={link.name} loading="lazy" />
        </a>
      ))}
    </div>
  );
}
