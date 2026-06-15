import { profile } from "@/lib/profile-data";
import { SectionHome } from "@/components/sections/SectionHome";

export default function HomePage() {
  return <SectionHome profile={profile} />;
}
