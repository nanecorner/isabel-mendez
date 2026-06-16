import { profile } from "@/lib/profile-data";
import { SectionMentoring } from "@/components/sections/SectionMentoring";

export function generateMetadata() {
  return { title: `${profile.name} | Formación de Recursos Humanos` };
}

export default function MentoringPage() {
  return <SectionMentoring profile={profile} />;
}
