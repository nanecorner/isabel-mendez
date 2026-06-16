import type { FullProfile } from "@/types/profile";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionResearch({ profile }: { profile: FullProfile }) {
  const vigentes   = profile.projects.filter((p) => p.status === "vigente");
  const concluidos = profile.projects.filter((p) => p.status === "concluido");

  return (
    <div className="container-profile pb-16">

      {/* ── Líneas de Investigación ─────────────────── */}
      <SectionBlock id="lineas" title="Líneas de Investigación">
        <div className="research-grid">
          {profile.researchLines.map((line) => (
            <div key={line.id} className="card research-card">
              <h3 className="font-semibold text-[var(--color-text)] text-lg mb-3">
                {line.title}
              </h3>
              <p className="text-[0.9375rem] text-[var(--color-muted)] mb-4 leading-relaxed">
                {line.description}
              </p>
              <div className="tags-list">
                {line.keywords.map((kw) => (
                  <span key={kw} className="tag">{kw}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ── Proyectos Financiados ───────────────────── */}
      <SectionBlock id="proyectos" title="Proyectos Financiados">

        {vigentes.length > 0 && (
          <div className="mb-12">
            <h3 className="projects-subtitle">Proyectos Vigentes</h3>
            <div className="space-y-4">
              {vigentes.map((p) => (
                <div key={p.id} className="card project-card">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <span className="project-code">{p.code}</span>
                    <span className="project-status vigente">Vigente</span>
                  </div>
                  <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-2 leading-snug">
                    {p.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
                    <span><strong className="text-[var(--color-text)]">Agencia:</strong> {p.agency}</span>
                    <span><strong className="text-[var(--color-text)]">Rol:</strong> {p.role}</span>
                    <span><strong className="text-[var(--color-text)]">Período:</strong> {p.period}</span>
                    {p.budget && (
                      <span><strong className="text-[var(--color-text)]">Monto:</strong> {p.budget}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {concluidos.length > 0 && (
          <div>
            <h3 className="projects-subtitle">Proyectos Concluidos</h3>
            <div className="space-y-4">
              {concluidos.map((p) => (
                <div key={p.id} className="card project-card opacity-80">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <span className="project-code">{p.code}</span>
                    <span className="project-status concluido">Concluido</span>
                  </div>
                  <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-2 leading-snug">
                    {p.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
                    <span><strong className="text-[var(--color-text)]">Agencia:</strong> {p.agency}</span>
                    <span><strong className="text-[var(--color-text)]">Rol:</strong> {p.role}</span>
                    <span><strong className="text-[var(--color-text)]">Período:</strong> {p.period}</span>
                    {p.budget && (
                      <span><strong className="text-[var(--color-text)]">Monto:</strong> {p.budget}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </SectionBlock>

      {/* ── Distinciones ────────────────────────────── */}
      {profile.awards.length > 0 && (
        <SectionBlock id="distinciones" title="Distinciones y Premios">
          <div className="space-y-4">
            {profile.awards.map((award) => (
              <div key={award.id} className="card flex items-start gap-4">
                <span className="award-year min-w-[100px] text-center">{award.year ?? "—"}</span>
                <div>
                  <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem]">
                    {award.title}
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">
                    {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* ── Eventos Académicos ────────────────────────── */}
      {profile.events && profile.events.length > 0 && (
        <SectionBlock id="eventos" title="Eventos Académicos Internacionales">
          <div className="space-y-4">
            {profile.events.map((ev) => (
              <div key={ev.id} className="card project-card">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <span className="project-code">{ev.type}</span>
                  <span className="text-sm font-medium text-[var(--color-secondary)]">{ev.date}</span>
                </div>
                <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-2 leading-snug">
                  {ev.title}
                </h4>
                <div className="text-sm text-[var(--color-muted)]">
                  {ev.location}
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

    </div>
  );
}
