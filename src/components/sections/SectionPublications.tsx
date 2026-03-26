import type { FullProfile } from "@/types/profile";
import { getStorageUrl } from "@/lib/supabase";
import { formatDate } from "@/utils/formatDate";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionPublications({ profile }: { profile: FullProfile }) {
  if (profile.publications.length === 0) return null;

  return (
    <SectionBlock id="publicaciones" title="Publicaciones">
      <div className="space-y-4">
        {profile.publications.map((pub: any) => (
          <article key={pub.id} className="pub-item">
            <div className="pub-year">{formatDate(pub.date)}</div>
            <div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-ref">{pub.reference}</p>
              
              <div className="pub-links">
                {pub.externalUrl && (
                  <a
                    href={pub.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Enlace Externo
                  </a>
                )}
                
                {pub.pdfUrl && (
                  <>
                    <a
                      href={getStorageUrl("portafolios", pub.pdfUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      Ver PDF
                    </a>
                    {pub.isDownloadable && (
                      <a
                        href={getStorageUrl("portafolios", pub.pdfUrl) + "?download=true"}
                        download
                        className="btn-ghost"
                      >
                        Descargar PDF
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}
