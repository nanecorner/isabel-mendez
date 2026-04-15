import { notFound } from "next/navigation";
import { getProfileName, getProfileForTrajectory } from "@/lib/data";
import { SectionTrajectory } from "@/components/sections/SectionTrajectory";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const profile = await getProfileName();
  if (!profile) return { title: "No encontrado" };
  return { title: `${profile.name} | Trayectoria` };
}

export default async function TrajectoryPage() {
  const profile = await getProfileForTrajectory();
  if (!profile) return notFound();

  return (
    <div className="container-profile pb-16">
      <SectionTrajectory profile={profile as any} />
    </div>
  );
}
