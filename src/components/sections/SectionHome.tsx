import Image from "next/image";
import type { FullProfile } from "@/types/profile";
import { getStorageUrl } from "@/lib/supabase";

export function SectionHome({ profile }: { profile: FullProfile }) {
  return (
    <section id="inicio" className="pb-16 border-b border-[var(--color-border)]">
      {/* Hero Interactivo */}
      <div className="relative w-full min-h-[70vh] flex items-end mb-16 overflow-hidden">
        {profile.photoUrl ? (
          <Image
            src={getStorageUrl("portafolios", profile.photoUrl)}
            alt={`Foto de ${profile.name}`}
            fill
            className="object-cover absolute inset-0 z-0"
            priority
          />
        ) : (
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--color-card)] to-[var(--color-bg)]" />
        )}
        
        {/* Overlay oscuro para legibilidad (mas opaco abajo, transparente arriba) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="container-profile relative z-20 w-full pb-12 hero-content">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white pb-1 drop-shadow-lg leading-tight">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed drop-shadow-md">
            {profile.bio}
          </p>

          {profile.quote && (
            <blockquote className="mt-8 text-xl md:text-2xl border-l-4 border-[var(--color-accent)] pl-6 font-serif italic text-[var(--color-accent)] font-medium drop-shadow-md brightness-150">
              "{profile.quote}"
            </blockquote>
          )}
        </div>
      </div>

      <div className="container-profile">
        {/* Grid de Líneas de Investigación */}
        {profile.researchLines.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
              Líneas de Investigación
            </h3>
            <div className="research-grid">
              {profile.researchLines.map((line: any) => (
                <div key={line.id} className="card">
                  <h4 className="font-semibold text-[var(--color-text)] mb-3 text-lg">
                    {line.title}
                  </h4>
                  {line.paragraphs.map((p: string, i: number) => (
                    <p key={i} className="text-[0.9375rem] text-[var(--color-muted)] mb-2 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grid inferior: Reconocimientos, Sociedades, etc. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Izquierda */}
          <div className="space-y-8">
            {profile.awards.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
                  Reconocimientos
                </h3>
                <ul className="space-y-2">
                  {profile.awards.map((award: any) => (
                    <li key={award.id} className="text-[0.9375rem]">
                      <span className="text-[var(--color-text)]">{award.title}</span>
                      {award.year && (
                        <span className="text-[var(--color-accent)] ml-2 font-semibold">
                          {award.year}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {profile.societies.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
                  Sociedades Científicas
                </h3>
                <div className="tags-list">
                  {profile.societies.map((soc: any) => (
                    <span key={soc.id} className="tag">
                      {soc.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Derecha */}
          <div className="space-y-8">
            {profile.fundings.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
                  Financiamientos
                </h3>
                <ul className="space-y-2 text-[0.9375rem]">
                  {profile.fundings.map((funding: any) => (
                    <li key={funding.id}>
                      {funding.url ? (
                        <a
                          href={funding.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-accent-2)] hover:text-[var(--color-text)] transition-colors"
                        >
                          {funding.name}
                        </a>
                      ) : (
                        <span className="text-[var(--color-text)]">{funding.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {profile.collaborations.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
                  Colaboraciones Activas
                </h3>
                <ul className="space-y-2 text-[0.9375rem]">
                  {profile.collaborations.map((collab: any) => (
                    <li key={collab.id}>
                      {collab.url ? (
                        <a
                          href={collab.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-accent-2)] hover:text-[var(--color-text)] transition-colors"
                        >
                          {collab.name}
                        </a>
                      ) : (
                        <span className="text-[var(--color-text)]">{collab.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
