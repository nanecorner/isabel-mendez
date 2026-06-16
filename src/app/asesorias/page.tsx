import { profile } from "@/lib/profile-data";
import { SectionMentoring } from "@/components/sections/SectionMentoring";

export function generateMetadata() {
  return { title: `${profile.name} | Tesis y Asesorías` };
}

export default function AsesoriasPage() {
  return <SectionMentoring profile={profile} />;
}
