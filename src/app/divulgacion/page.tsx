import { profile } from "@/lib/profile-data";
import { SectionDissemination } from "@/components/sections/SectionDissemination";

export function generateMetadata() {
  return { title: `${profile.name} | Divulgación y Difusión` };
}

export default function DisseminationPage() {
  return (
    <div className="container-profile pb-16">
      <SectionDissemination profile={profile} />
    </div>
  );
}
