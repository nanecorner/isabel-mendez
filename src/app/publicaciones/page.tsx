import { profile } from "@/lib/profile-data";
import { SectionPublications } from "@/components/sections/SectionPublications";

export function generateMetadata() {
  return { title: `${profile.name} | Publicaciones` };
}

export default function PublicationsPage() {
  return (
    <div className="container-profile pb-16">
      <SectionPublications profile={profile} />
    </div>
  );
}
