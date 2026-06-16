import type { FullProfile } from "@/types/profile";
import { formatDate } from "@/utils/formatDate";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionDissemination({ profile }: { profile: FullProfile }) {
  const articles = profile.outreach.filter((o) => o.type === "article");
  const media    = profile.outreach.filter((o) => o.type === "media");
  const talks    = profile.outreach.filter((o) => o.type === "talk");

  return (
    <div className="container-profile pb-16">

      {/* ── Artículos de Difusión ────────────────────── */}
      {articles.length > 0 && (
        <SectionBlock id="articulos-divulgacion" title="Artículos de Divulgación">
          <ul className="space-y-4">
            {articles.map((item) => (
              <li key={item.id} className="card py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-[0.9375rem] text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] mt-1">
                    {item.venue}
                    {item.date && <span className="ml-2">· {formatDate(item.date)}</span>}
                  </p>
                </div>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost shrink-0"
                  >
                    Leer artículo ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </SectionBlock>
      )}

      {/* ── Apariciones en Medios ────────────────────── */}
      {media.length > 0 && (
        <SectionBlock id="medios" title="Apariciones en Medios">
          <div className="space-y-6">
            {media.map((item) => (
              <div key={item.id}>
                {/* Embed de video si existe */}
                {item.embedUrl && (
                  <div className="media-embed-wrapper mb-4">
                    <iframe
                      src={item.embedUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="media-embed"
                    />
                  </div>
                )}

                <div className="card flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MediaTypeIcon type={item.mediaType} />
                    <div>
                      <h3 className="font-semibold text-[0.9375rem] text-[var(--color-text)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)] mt-1">
                        {item.venue}
                        {item.date && <span className="ml-2">· {formatDate(item.date)}</span>}
                      </p>
                    </div>
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost shrink-0"
                    >
                      Ver ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* ── Charlas y Ferias de Ciencia ──────────────── */}
      {talks.length > 0 && (
        <SectionBlock id="charlas" title="Charlas y Ferias de Ciencia">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {talks.map((item) => (
              <div key={item.id} className="card">
                <h3 className="font-semibold text-[0.9375rem] text-[var(--color-text)] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.venue}
                  {item.date && <span className="ml-2">· {formatDate(item.date)}</span>}
                </p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-3 text-xs"
                  >
                    Ver ↗
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

function MediaTypeIcon({ type }: { type: string | null }) {
  const cls = "w-8 h-8 flex items-center justify-center rounded-full shrink-0 text-sm font-bold bg-[var(--color-surface)] text-[var(--color-accent)]";
  if (type === "radio") return <div className={cls}>📻</div>;
  if (type === "video") return <div className={cls}>🎬</div>;
  if (type === "prensa") return <div className={cls}>📰</div>;
  if (type === "tv")    return <div className={cls}>📺</div>;
  return <div className={cls}>🔗</div>;
}
