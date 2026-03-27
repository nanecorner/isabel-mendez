import Image from "next/image";
import type { FullProfile } from "@/types/profile";
import { getStorageUrl } from "@/lib/supabase";
import { SectionBlock } from "../layout/SectionBlock";

export function SectionGallery({ profile }: { profile: FullProfile }) {
  if (profile.gallery.length === 0) return null;

  return (
    <SectionBlock id="galeria" title="Galería Fotográfica">
      <div className="gallery-grid">
        {profile.gallery.map((item: any) => (
          <div key={item.id} className="gallery-item group">
            <div className="relative aspect-4/3 w-full bg-[var(--color-card)]">
              {item.imageUrl ? (
                <Image
                  src={getStorageUrl("portafolios", item.imageUrl)}
                  alt={item.shortName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="gallery-img-placeholder">📸</div>
              )}
            </div>
            
            <div className="gallery-caption">
              <strong>{item.shortName}</strong>
              {item.description && <span>{item.description}</span>}
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
