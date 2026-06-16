"use client";

import { useState } from "react";
import type { FullProfile } from "@/types/profile";
import { formatDate } from "@/utils/formatDate";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionPublications({ profile }: { profile: FullProfile }) {
  const [showAll, setShowAll] = useState(false);

  const featured  = profile.publications.filter((p) => p.featured && p.type === "article");
  const articles  = profile.publications.filter((p) => !p.featured && p.type === "article");
  const books     = profile.publications.filter((p) => p.type === "book");
  const chapters  = profile.publications.filter((p) => p.type === "chapter");
  const editorials= profile.publications.filter((p) => p.type === "editorial");
  const abstracts = profile.publications.filter((p) => p.type === "conference_abstract");
  const proceedings = profile.publications.filter((p) => p.type === "proceedings");
  const outreach  = profile.publications.filter((p) => p.type === "outreach");

  const visibleArticles = showAll ? articles : articles.slice(0, 5);

  return (
    <div className="container-profile pb-16">

      {/* ── Artículos Destacados ─────────────────────── */}
      {featured.length > 0 && (
        <SectionBlock id="destacadas" title="Publicaciones Destacadas">
          <div className="space-y-0">
            {featured.map((pub) => (
              <article key={pub.id} className="pub-item">
                <div className="pub-year">{formatDate(pub.date)}</div>
                <div>
                  <h3 className="pub-title">{pub.title}</h3>
                  <p className="pub-ref">{pub.reference}</p>
                  <div className="pub-links">
                    {pub.externalUrl && (
                      <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        Ver artículo ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionBlock>
      )}

      {/* ── Lista Completa ───────────────────────────── */}
      {articles.length > 0 && (
        <SectionBlock id="articulos" title="Artículos en Revistas Indizadas">
          <div className="space-y-0">
            {visibleArticles.map((pub) => (
              <article key={pub.id} className="pub-item">
                <div className="pub-year">{formatDate(pub.date)}</div>
                <div>
                  <h3 className="pub-title">{pub.title}</h3>
                  <p className="pub-ref">{pub.reference}</p>
                  <div className="pub-links">
                    {pub.externalUrl && (
                      <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        Ver artículo ↗
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                        Ver PDF
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {articles.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 btn-ghost w-full justify-center py-2 text-sm"
            >
              {showAll
                ? "Mostrar menos ↑"
                : `Mostrar ${articles.length - 5} publicaciones más ↓`}
            </button>
          )}
        </SectionBlock>
      )}

      {/* ── Libros y Capítulos ───────────────────────── */}
      {(books.length > 0 || chapters.length > 0) && (
        <SectionBlock id="libros" title="Libros y Capítulos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {books.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                  Libros
                </h3>
                <div className="space-y-0">
                  {books.map((pub) => (
                    <article key={pub.id} className="pub-item">
                      <div className="pub-year">{pub.date}</div>
                      <div>
                        <h4 className="pub-title">{pub.title}</h4>
                        <p className="pub-ref">{pub.reference}</p>
                        <div className="pub-links">
                          {pub.externalUrl && (
                            <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver libro ↗</a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {chapters.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                  Capítulos de Libro
                </h3>
                <div className="space-y-0">
                  {chapters.map((pub) => (
                    <article key={pub.id} className="pub-item">
                      <div className="pub-year">{pub.date}</div>
                      <div>
                        <h4 className="pub-title">{pub.title}</h4>
                        <p className="pub-ref">{pub.reference}</p>
                        <div className="pub-links">
                          {pub.externalUrl && (
                            <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver capítulo ↗</a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SectionBlock>
      )}

      {/* ── Otras Publicaciones ────────────────────────── */}
      {(editorials.length > 0 || abstracts.length > 0 || proceedings.length > 0 || outreach.length > 0) && (
        <SectionBlock id="otras-publicaciones" title="Otras Publicaciones">
          <div className="grid grid-cols-1 gap-8">
            
            {editorials.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                  Editorial
                </h3>
                <div className="space-y-0">
                  {editorials.map((pub) => (
                    <article key={pub.id} className="pub-item">
                      <div className="pub-year">{formatDate(pub.date)}</div>
                      <div>
                        <h4 className="pub-title">{pub.title}</h4>
                        <p className="pub-ref">{pub.reference}</p>
                        <div className="pub-links">
                          {pub.externalUrl && (
                            <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver publicación ↗</a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {abstracts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                  Resúmenes de Congreso con Arbitraje
                </h3>
                <div className="space-y-0">
                  {abstracts.map((pub) => (
                    <article key={pub.id} className="pub-item">
                      <div className="pub-year">{formatDate(pub.date)}</div>
                      <div>
                        <h4 className="pub-title">{pub.title}</h4>
                        <p className="pub-ref">{pub.reference}</p>
                        <div className="pub-links">
                          {pub.externalUrl && (
                            <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver resumen ↗</a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {proceedings.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                  Memorias In Extenso
                </h3>
                <div className="space-y-0">
                  {proceedings.map((pub) => (
                    <article key={pub.id} className="pub-item">
                      <div className="pub-year">{formatDate(pub.date)}</div>
                      <div>
                        <h4 className="pub-title">{pub.title}</h4>
                        <p className="pub-ref">{pub.reference}</p>
                        <div className="pub-links">
                          {pub.externalUrl && (
                            <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver memoria ↗</a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {outreach.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-4">
                  Artículos de Difusión y Divulgación
                </h3>
                <div className="space-y-0">
                  {outreach.map((pub) => (
                    <article key={pub.id} className="pub-item">
                      <div className="pub-year">{formatDate(pub.date)}</div>
                      <div>
                        <h4 className="pub-title">{pub.title}</h4>
                        <p className="pub-ref">{pub.reference}</p>
                        <div className="pub-links">
                          {pub.externalUrl && (
                            <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Ver artículo ↗</a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

          </div>
        </SectionBlock>
      )}

      {/* ── Trabajo Editorial ────────────────────────── */}
      {profile.editorialRoles.length > 0 && (
        <SectionBlock id="editorial" title="Trabajo Editorial">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.editorialRoles.map((role) => (
              <div key={role.id} className="card">
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                  {role.role}
                </p>
                <h4 className="font-semibold text-[var(--color-text)] text-[0.9375rem] leading-snug mb-1">
                  {role.journal}
                </h4>
                {role.publisher && (
                  <p className="text-xs text-[var(--color-muted)]">{role.publisher}</p>
                )}
                {role.url && (
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-3 text-xs"
                  >
                    Visitar ↗
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
