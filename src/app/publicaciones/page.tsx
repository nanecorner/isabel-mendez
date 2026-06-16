import { profile } from "@/lib/profile-data";
import { SectionPublications } from "@/components/sections/SectionPublications";

export function generateMetadata() {
  return { title: `${profile.name} | Publicaciones` };
}

export default function PublicationsPage() {
  return <SectionPublications profile={profile} />;
}
