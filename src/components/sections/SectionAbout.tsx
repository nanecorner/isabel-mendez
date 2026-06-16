import type { FullProfile } from "@/types/profile";

export function SectionAbout({ profile }: { profile: FullProfile }) {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────── */}
      <section id="inicio" className="relative w-full min-h-[60vh] flex items-end overflow-hidden mb-0">
        {profile.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.photoUrl}
            alt={`Foto de ${profile.name}`}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : (
          <div className="absolute inset-0 z-0 hero-fallback-bg" />
        )}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="container-profile relative z-20 w-full pb-14 hero-content">
          {/* Badges SNI / PRIDE */}
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.levels.map((lv) => (
              <span key={lv.id} className="level-badge">
                {lv.label}: <strong>{lv.value}</strong>
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight mb-2">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-1">
            {profile.title}
          </p>
          <p className="text-base text-white/60 mb-6">
            {profile.institution}
          </p>

          {/* Links académicos */}
          <div className="flex flex-wrap gap-3">
            {profile.academicLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="academic-chip"
              >
                <AcademicIcon icon={link.icon} />
                {link.label}
              </a>
            ))}
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="academic-chip">
                <MailIcon />
                {profile.email}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Bio + Trayectoria ──────────────────────────── */}
      <div className="bg-[var(--color-bg)]">
        <div className="container-profile py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Resumen biográfico */}
            <div className="lg:col-span-3">
              <h2 className="section-title">Sobre Mí</h2>
              <p className="text-[1.0625rem] text-[var(--color-muted)] leading-relaxed">
                {profile.bio}
              </p>

              {/* Formación académica (grados) */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                  Formación Académica
                </h3>
                <div className="space-y-2">
                  <div className="degree-item">
                    <span className="degree-label">Doctorado</span>
                    <span>Ciencias Biomédicas — UNAM</span>
                  </div>
                  <div className="degree-item">
                    <span className="degree-label">Maestría</span>
                    <span>Ciencias Biomédicas — UNAM</span>
                  </div>
                  <div className="degree-item">
                    <span className="degree-label">Licenciatura</span>
                    <span>Química Farmacéutica Biológica (QFB) — UNAM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trayectoria profesional */}
            <div className="lg:col-span-2">
              <h2 className="section-title">Trayectoria</h2>
              <div className="timeline">
                {profile.career.map((item) => (
                  <div key={item.id} className="timeline-item">
                    <div className="timeline-date">{item.period}</div>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-sub">{item.institution}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ── Iconos inline ────────────────────────────────────────

function AcademicIcon({ icon }: { icon: string | null }) {
  if (icon === "orcid") return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.916-2.872 3.916-3.722 0-2.016-1.266-3.722-3.916-3.722h-2.297z"/>
    </svg>
  );
  if (icon === "scopus") return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.7 5.6c-.3-.4-.8-.5-1.2-.3l-3.6 2-2.1-3.6c-.2-.4-.7-.6-1.1-.5-.4.1-.8.5-.8.9l-.2 4.1-4 .9c-.4.1-.8.5-.8.9s.2.9.6 1l3.8 1.5-.7 4c-.1.4.1.9.5 1.1.1.1.3.1.5.1.3 0 .5-.1.7-.3l2.9-2.9 3.3 2.1c.2.1.4.2.6.2.2 0 .4-.1.6-.2.4-.2.6-.7.5-1.1l-1-4.1 2.2-3.5c.2-.4.1-.9-.2-1.2z"/>
    </svg>
  );
  if (icon === "wos") return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
