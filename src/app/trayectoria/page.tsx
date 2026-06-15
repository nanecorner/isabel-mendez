import { profile } from "@/lib/profile-data";
import { SectionTrajectory } from "@/components/sections/SectionTrajectory";

export function generateMetadata() {
  return { title: `${profile.name} | Trayectoria` };
}

export default function TrajectoryPage() {
  return (
    <div className="container-profile pb-16">
      <SectionTrajectory profile={profile} />
    </div>
  );
}
