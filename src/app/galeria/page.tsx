import { profile } from "@/lib/profile-data";
import { SectionGallery } from "@/components/sections/SectionGallery";

export function generateMetadata() {
  return { title: `${profile.name} | Galería Fotográfica` };
}

export default function GalleryPage() {
  return (
    <div className="container-profile pb-16">
      <SectionGallery profile={profile} />
    </div>
  );
}
