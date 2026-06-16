import type { FullProfile } from "@/types/profile";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionTeaching({ profile }: { profile: FullProfile }) {
  const asCoord = profile.courses.filter((c) => c.role === "coordinadora");
  const asGuest = profile.courses.filter((c) => c.role !== "coordinadora");

  return (
    <div className="container-profile pb-16">

      {/* ── Docencia ────────────────────────────────── */}
      <SectionBlock id="docencia" title="Docencia">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {asCoord.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-5">
                Como Coordinadora
              </h3>
              <div className="space-y-4">
                {asCoord.map((c) => (
                  <div key={c.id} className="card">
                    <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-1">
                      {c.name}
                    </h4>
                    <p className="text-sm text-[var(--color-muted)]">{c.program}</p>
                    <p className="text-sm text-[var(--color-muted)]">{c.institution}</p>
                    {c.period && (
                      <p className="text-xs text-[var(--color-accent)] font-semibold mt-2">{c.period}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {asGuest.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-5">
                Como Profesora Invitada / Colaboradora
              </h3>
              <div className="space-y-4">
                {asGuest.map((c) => (
                  <div key={c.id} className="card">
                    <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-1">
                      {c.name}
                    </h4>
                    <p className="text-sm text-[var(--color-muted)]">{c.program}</p>
                    <p className="text-sm text-[var(--color-muted)]">{c.institution}</p>
                    {c.period && (
                      <p className="text-xs text-[var(--color-accent)] font-semibold mt-2">{c.period}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionBlock>

      {/* ── Trabajo Institucional ────────────────────── */}
      {profile.committees.length > 0 && (
        <SectionBlock id="comites" title="Comités y Cuerpos Colegiados">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.committees.map((cm) => (
              <div key={cm.id} className="card flex items-start gap-4">
                <div className="committee-dot mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] leading-tight mb-1">
                    {cm.role}
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] leading-tight">{cm.organization}</p>
                  {cm.period && (
                    <p className="text-xs text-[var(--color-accent)] font-semibold mt-1.5">{cm.period}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* ── Sociedades Científicas ───────────────────── */}
      {profile.societies.length > 0 && (
        <SectionBlock id="sociedades" title="Sociedades Científicas">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.societies.map((soc) => (
              <div key={soc.id} className="card">
                <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">
                  {soc.acronym}
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-snug">
                  {soc.fullName}
                </p>
                {soc.url && (
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-3 text-xs"
                  >
                    Sitio web ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

    </div>
  );
}
