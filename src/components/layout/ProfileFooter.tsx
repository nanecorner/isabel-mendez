import type { FullProfile } from "@/types/profile";

export function ProfileFooter({ profile }: { profile: FullProfile }) {
  if (profile.footerLinks.length === 0) return null;

  return (
    <footer className="profile-footer border-t border-[#272f45]">
      {profile.footerLinks.map((link: any) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          {link.label}
        </a>
      ))}
    </footer>
  );
}
