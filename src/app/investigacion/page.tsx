import { profile } from "@/lib/profile-data";
import { SectionResearch } from "@/components/sections/SectionResearch";

export function generateMetadata() {
  return { title: `${profile.name} | Investigación y Proyectos` };
}

export default function ResearchPage() {
  return <SectionResearch profile={profile} />;
}
