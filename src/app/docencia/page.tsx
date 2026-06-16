import { profile } from "@/lib/profile-data";
import { SectionTeaching } from "@/components/sections/SectionTeaching";

export function generateMetadata() {
  return { title: `${profile.name} | Docencia y Academia` };
}

export default function TeachingPage() {
  return <SectionTeaching profile={profile} />;
}
