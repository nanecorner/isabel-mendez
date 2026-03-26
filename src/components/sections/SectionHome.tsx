import Image from "next/image";
import type { FullProfile } from "@/types/profile";
import { getStorageUrl } from "@/lib/supabase";

export function SectionHome({ profile }: { profile: FullProfile }) {
  const photoFallback = profile.name.charAt(0).toUpperCase();

  return (
    <section id="inicio" className="pt-20 pb-16 border-b border-[#272f45]">
      {/* Bio y Foto */}
      <div className="hero-wrapper">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text pb-1">
            {profile.name}
          </h1>
          <p className="hero-bio">{profile.bio}</p>

          {profile.quote && (
            <blockquote className="hero-quote">"{profile.quote}"</blockquote>
          )}
        </div>

        <div className="hero-photo shrink-0">
          {profile.photoUrl ? (
            <Image
              src={getStorageUrl("portafolios", profile.photoUrl)}
              alt={`Foto de ${profile.name}`}
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          ) : (
            <div className="photo-placeholder">{photoFallback}</div>
          )}
        </div>
      </div>

      {/* Grid de Líneas de Investigación */}
      {profile.researchLines.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-[#8b93a8] uppercase tracking-wider mb-4">
            Líneas de Investigación
          </h3>
          <div className="research-grid">
            {profile.researchLines.map((line: any) => (
              <div key={line.id} className="card">
                <h4 className="font-semibold text-[#e8eaf0] mb-3 text-lg">
                  {line.title}
                </h4>
                {line.paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-[0.9375rem] text-[#8b93a8] mb-2 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grid inferior: Reconocimientos, Sociedades, etc. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Izquierda */}
        <div className="space-y-8">
          {profile.awards.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#8b93a8] uppercase tracking-wider mb-3">
                Reconocimientos
              </h3>
              <ul className="space-y-2">
                {profile.awards.map((award: any) => (
                  <li key={award.id} className="text-[0.9375rem]">
                    <span className="text-[#e8eaf0]">{award.title}</span>
                    {award.year && (
                      <span className="text-[#6366f1] ml-2 font-semibold">
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
              <h3 className="text-sm font-semibold text-[#8b93a8] uppercase tracking-wider mb-3">
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
              <h3 className="text-sm font-semibold text-[#8b93a8] uppercase tracking-wider mb-3">
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
                        className="text-[#a78bfa] hover:text-[#e8eaf0] transition-colors"
                      >
                        {funding.name}
                      </a>
                    ) : (
                      <span className="text-[#e8eaf0]">{funding.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {profile.collaborations.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-[#8b93a8] uppercase tracking-wider mb-3">
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
                        className="text-[#a78bfa] hover:text-[#e8eaf0] transition-colors"
                      >
                        {collab.name}
                      </a>
                    ) : (
                      <span className="text-[#e8eaf0]">{collab.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
