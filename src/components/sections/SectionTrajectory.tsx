import type { FullProfile } from "@/types/profile";
import { getStorageUrl } from "@/lib/supabase";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionTrajectory({ profile }: { profile: FullProfile }) {
  const hasContent =
    profile.education.length > 0 ||
    profile.experience.length > 0 ||
    profile.teaching.length > 0;

  if (!hasContent) return null;

  return (
    <SectionBlock id="trayectoria" title="Trayectoria">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        {/* Izquierda: Educación y Docencia */}
        <div className="space-y-12">
          {profile.education.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[var(--color-text)]">
                Formación Educativa
              </h3>
              <div className="timeline">
                {profile.education.map((edu: any) => (
                  <div key={edu.id} className="timeline-item">
                    <div className="timeline-date">{edu.graduationDate}</div>
                    <div className="timeline-title">{edu.degree}</div>
                    <div className="timeline-sub">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {profile.teaching.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[var(--color-text)]">
                Docencia
              </h3>
              <div className="timeline">
                {profile.teaching.map((teach: any) => (
                  <div key={teach.id} className="timeline-item">
                    <div className="timeline-date">{teach.curriculum}</div>
                    <div className="timeline-title">{teach.course}</div>
                    <div className="timeline-sub">{teach.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Derecha: Experiencia Profesional y CV */}
        <div className="space-y-12">
          {profile.experience.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[var(--color-text)]">
                Experiencia Profesional
              </h3>
              <div className="timeline">
                {profile.experience.map((exp: any) => (
                  <div key={exp.id} className="timeline-item">
                    <div className="timeline-date">
                      {exp.startDate} — {exp.endDate || "Presente"}
                    </div>
                    <div className="timeline-title">{exp.title}</div>
                    <div className="timeline-sub">{exp.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {profile.cvUrl && (
            <div className="card mt-8 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-bg)]">
              <h3 className="font-semibold text-lg mb-2 text-[var(--color-text)]">
                Curriculum Vitae
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">
                Consulta el CV en PDF completo.
              </p>
              <div className="flex gap-3">
                <a
                  href={getStorageUrl("portafolios", profile.cvUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12h4l3-9 5 18 3-9h5" />
                  </svg>
                  Ver PDF
                </a>
                {profile.cvIsDownloadable && (
                  <a
                    href={getStorageUrl("portafolios", profile.cvUrl) + "?download=true"}
                    download
                    className="btn-ghost border-[var(--color-accent)] text-[var(--color-text)] bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20"
                  >
                    Descargar
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionBlock>
  );
}
