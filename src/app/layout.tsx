import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { ProfileNavbar } from "@/components/layout/ProfileNavbar";
import { ProfileFooter } from "@/components/layout/ProfileFooter";
import "./globals.css";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const slug = process.env.NEXT_PUBLIC_PROFILE_SLUG || "dra-maria-garcia";
  const profile = await prisma.profile.findUnique({
    where: { slug },
    select: { name: true, bio: true }
  });
  if (!profile) return { title: "Portafolio" };
  return {
    title: profile.name,
    description: profile.bio
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  if (!profile) {
    return (
      <html lang="es" className="h-full antialiased">
        <body className="min-h-full flex flex-col justify-center items-center bg-gray-50 text-gray-900">
          <h1 className="text-2xl font-bold">Perfil no encontrado.</h1>
          <p>Revisa tu variable NEXT_PUBLIC_PROFILE_SLUG en .env</p>
        </body>
      </html>
    );
  }

  const primary = (profile as any).themePrimary || "#ffffff";
  const secondary = (profile as any).themeSecondary || "#000000";
  const font = (profile as any).themeFont || "Montserrat";

  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col m-0 p-0">
        <div 
          className="min-h-screen flex flex-col w-full custom-theme-wrapper bg-[var(--color-bg)] text-[var(--color-text)]"
          style={{
            '--color-bg-custom': primary,
            '--color-accent-custom': secondary,
            '--font-family-custom': `"${font}", sans-serif`,
          } as React.CSSProperties}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
          `}</style>
          
          <ProfileNavbar profile={profile as any} />
          <main className="flex-grow">{children}</main>
          <ProfileFooter profile={profile as any} />
        </div>
      </body>
    </html>
  );
}
