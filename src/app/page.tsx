import { profile } from "@/lib/profile-data";
import { SectionAbout } from "@/components/sections/SectionAbout";

export function generateMetadata() {
  return {
    title: profile.name,
    description: profile.bio,
  };
}

export default function HomePage() {
  return <SectionAbout profile={profile} />;
}
