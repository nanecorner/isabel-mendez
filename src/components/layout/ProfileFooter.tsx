import type { FullProfile } from "@/types/profile";

export function ProfileFooter({ profile }: { profile: FullProfile }) {
  return (
    <footer className="profile-footer border-t border-[var(--color-border)] flex flex-col items-center justify-center pt-8 pb-4">
      {profile.footerLinks.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center mb-6">
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
        </div>
      )}
      
      <div className="text-center text-sm text-[var(--color-muted)] font-medium">
        Hecho por D'cReaM 🐢
      </div>
    </footer>
  );
}
