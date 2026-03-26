import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileNavbar } from "@/components/layout/ProfileNavbar";
import { SectionHome } from "@/components/sections/SectionHome";
import { SectionTrajectory } from "@/components/sections/SectionTrajectory";
import { SectionPublications } from "@/components/sections/SectionPublications";
import { SectionGallery } from "@/components/sections/SectionGallery";
import { SectionDissemination } from "@/components/sections/SectionDissemination";
import { ProfileFooter } from "@/components/layout/ProfileFooter";

// Generar rutas estáticas en build time basándose en los slugs existentes
export async function generateStaticParams() {
  const profiles = await prisma.profile.findMany({ select: { slug: true } });
  return profiles.map((p: any) => ({ slug: p.slug }));
}

// Metadata dinámica (SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = await prisma.profile.findUnique({
    where: { slug },
    select: { name: true, bio: true },
  });

  if (!profile) return { title: "Perfil no encontrado" };

  return {
    title: `${profile.name} | Portafolio Profesional`,
    description: profile.bio.slice(0, 160),
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Consulta de todos los datos del perfil y sus relaciones
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
    <div className="min-h-screen bg-[#0f1117]">
      <ProfileNavbar profile={profile as any} />
      
      <main className="container-profile">
        <SectionHome profile={profile as any} />
        <SectionTrajectory profile={profile as any} />
        <SectionPublications profile={profile as any} />
        <SectionGallery profile={profile as any} />
        <SectionDissemination profile={profile as any} />
      </main>

      <ProfileFooter profile={profile as any} />
    </div>
  );
}
