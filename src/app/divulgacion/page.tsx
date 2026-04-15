import { notFound } from "next/navigation";
import { getProfileName, getProfileForDissemination } from "@/lib/data";
import { SectionDissemination } from "@/components/sections/SectionDissemination";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const profile = await getProfileName();
  if (!profile) return { title: "No encontrado" };
  return { title: `${profile.name} | Divulgación y Difusión` };
}

export default async function DisseminationPage() {
  const profile = await getProfileForDissemination();
  if (!profile) return notFound();

  return (
    <div className="container-profile pb-16">
      <SectionDissemination profile={profile as any} />
    </div>
  );
}
