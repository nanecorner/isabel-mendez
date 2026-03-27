import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { SectionTrajectory } from "@/components/sections/SectionTrajectory";

export async function generateMetadata() {
  const slug = process.env.NEXT_PUBLIC_PROFILE_SLUG || "dra-maria-garcia";
  const profile = await prisma.profile.findUnique({
    where: { slug },
    select: { name: true },
  });
  if (!profile) return { title: "No encontrado" };
  return { title: `${profile.name} | Trayectoria` };
}

export default async function TrajectoryPage() {
  const slug = process.env.NEXT_PUBLIC_PROFILE_SLUG || "dra-maria-garcia";
  const profile = await prisma.profile.findUnique({
    where: { slug },
    include: {
      researchLines: { orderBy: { order: "asc" } },
      awards: { orderBy: { year: "desc" } },
      societies: { orderBy: { id: "asc" } },
      collaborations: { orderBy: { id: "asc" } },
      fundings: { orderBy: { id: "asc" } },
      education: { orderBy: { order: "asc" } },
      experience: { orderBy: { order: "asc" } },
      teaching: { orderBy: { order: "asc" } },
      publications: { orderBy: { order: "asc" } },
      gallery: { orderBy: { order: "asc" } },
      dissemination: { orderBy: { order: "asc" } },
      footerLinks: { orderBy: { order: "asc" } },
    },
  });

  if (!profile) return notFound();

  return (
    <div className="container-profile pb-16">
      <SectionTrajectory profile={profile as any} />
    </div>
  );
}
