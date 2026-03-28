import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { SectionHome } from "@/components/sections/SectionHome";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const slug = process.env.NEXT_PUBLIC_PROFILE_SLUG;
  
  if (!slug) {
    console.error("NEXT_PUBLIC_PROFILE_SLUG is not defined");
    return notFound();
  }

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

  return <SectionHome profile={profile as any} />;
}
