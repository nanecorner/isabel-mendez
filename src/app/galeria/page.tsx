import { notFound } from "next/navigation";
import { getProfileName, getProfileForGallery } from "@/lib/data";
import { SectionGallery } from "@/components/sections/SectionGallery";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const profile = await getProfileName();
  if (!profile) return { title: "No encontrado" };
  return { title: `${profile.name} | Galería Fotográfica` };
}

export default async function GalleryPage() {
  const profile = await getProfileForGallery();
  if (!profile) return notFound();

  return (
    <div className="container-profile pb-16">
      <SectionGallery profile={profile as any} />
    </div>
  );
}
