import type { FullProfile } from "@/types/profile";
import { formatDate } from "@/utils/formatDate";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionDissemination({ profile }: { profile: FullProfile }) {
  if (profile.dissemination.length === 0) return null;

  return (
    <SectionBlock id="divulgacion" title="Divulgación y Difusión">
      <ul className="space-y-4">
        {profile.dissemination.map((item: any) => (
          <li key={item.id} className="card py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-[0.9375rem] text-[#e8eaf0]">
                {item.title}
              </h3>
              {item.date && (
                <p className="text-sm text-[#8b93a8] mt-1">
                  {formatDate(item.date)}
                </p>
              )}
            </div>
            
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost shrink-0"
              >
                Ver Contenido
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            )}
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}
