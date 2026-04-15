import { notFound } from "next/navigation";
import { getProfileName, getProfileForPublications } from "@/lib/data";
import { SectionPublications } from "@/components/sections/SectionPublications";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const profile = await getProfileName();
  if (!profile) return { title: "No encontrado" };
  return { title: `${profile.name} | Publicaciones` };
}

export default async function PublicationsPage() {
  const profile = await getProfileForPublications();
  if (!profile) return notFound();

  return (
    <div className="container-profile pb-16">
      <SectionPublications profile={profile as any} />
    </div>
  );
}
