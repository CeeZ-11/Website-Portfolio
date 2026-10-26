export default function SocialLinks({ links }) {
  return (
    <div className="profile-socials">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          title={link.name}
        >
          <img src={link.icon} alt="" loading="lazy" />
        </a>
      ))}
    </div>
  );
}
