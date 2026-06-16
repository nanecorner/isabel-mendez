import type { FullProfile, Thesis, ThesisLevel } from "@/types/profile";
import { SectionBlock } from "../layout/SectionBlock";

const LEVEL_LABELS: Record<ThesisLevel, string> = {
  postdoc: "Posdoctorado",
  doctorado: "Doctorado",
  maestria: "Maestría",
  licenciatura: "Licenciatura",
};

const LEVEL_ORDER: ThesisLevel[] = ["postdoc", "doctorado", "maestria", "licenciatura"];

export function SectionMentoring({ profile }: { profile: FullProfile }) {
  const inProgress  = profile.theses.filter((t) => t.status === "en_proceso");
  const concluded   = profile.theses.filter((t) => t.status === "concluida");

  // Contar por nivel para el resumen
  const countByLevel = (theses: Thesis[]) =>
    LEVEL_ORDER.reduce((acc, lv) => {
      const n = theses.filter((t) => t.level === lv).length;
      if (n > 0) acc.push({ level: lv, count: n });
      return acc;
    }, [] as { level: ThesisLevel; count: number }[]);

  return (
    <div className="container-profile pb-16">

      {/* ── Resumen numérico ────────────────────────── */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <h2 className="section-title">Formación de Recursos Humanos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {LEVEL_ORDER.map((lv) => {
            const total = profile.theses.filter((t) => t.level === lv).length;
            if (total === 0) return null;
            return (
              <div key={lv} className="card text-center">
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-1">{total}</div>
                <div className="text-sm text-[var(--color-muted)]">{LEVEL_LABELS[lv]}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── En proceso ──────────────────────────────── */}
      {inProgress.length > 0 && (
        <SectionBlock id="en-proceso" title="Alumnos en Proceso (2026)">
          <div className="space-y-4">
            {inProgress.map((t) => (
              <div key={t.id} className="card thesis-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="thesis-level-badge">{LEVEL_LABELS[t.level]}</span>
                  <span className="thesis-status en-proceso">En proceso</span>
                </div>
                <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-1">
                  {t.thesisTitle}
                </h4>
                <p className="text-sm text-[var(--color-muted)]">
                  {t.studentName} · {t.institution}
                </p>
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* ── Concluidas por nivel ─────────────────────── */}
      <SectionBlock id="concluidas" title="Tesis Concluidas">
        {LEVEL_ORDER.map((lv) => {
          const group = concluded.filter((t) => t.level === lv);
          if (group.length === 0) return null;
          return (
            <div key={lv} className="mb-10 last:mb-0">
              <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                {LEVEL_LABELS[lv]} ({group.length})
              </h3>
              <div className="space-y-3">
                {group.map((t) => (
                  <div key={t.id} className="card thesis-card-sm">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-0.5">
                          {t.thesisTitle}
                        </h4>
                        <p className="text-sm text-[var(--color-muted)]">
                          {t.studentName} · {t.institution}
                        </p>
                      </div>
                      {t.year && (
                        <span className="text-sm font-semibold text-[var(--color-accent)] shrink-0">
                          {t.year}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </SectionBlock>

      {/* ── Otras asesorías ──────────────────────────── */}
      {profile.otherAdvising.length > 0 && (
        <SectionBlock id="asesorias" title="Otras Asesorías">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.otherAdvising.map((item) => (
              <div key={item.id} className="card">
                <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] mb-1">
                  {item.type}
                </h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

    </div>
  );
}
