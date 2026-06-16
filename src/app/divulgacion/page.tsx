import { profile } from "@/lib/profile-data";
import { SectionDissemination } from "@/components/sections/SectionDissemination";

export function generateMetadata() {
  return { title: `${profile.name} | Divulgación y Sociedad` };
}

export default function DisseminationPage() {
  return <SectionDissemination profile={profile} />;
}
