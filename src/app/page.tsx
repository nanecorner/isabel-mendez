import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const profiles = await prisma.profile.findMany({
    select: { slug: true, name: true, bio: true, photoUrl: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#0f1117] flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text text-center">
        Portafolios Profesionales
      </h1>
      <p className="text-[#8b93a8] text-center max-w-2xl mb-12 text-lg">
        Plataforma para generar páginas de portafolio académico y profesional de manera masiva a partir de una plantilla dinámica.
      </p>

      <div className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold text-[#e8eaf0] mb-6">Perfiles disponibles</h2>
        
        {profiles.length === 0 ? (
          <p className="text-[#8b93a8] italic bg-[#1a2035] p-6 rounded-xl border border-[#272f45] text-center">
            No hay perfiles en la base de datos.
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profiles.map((profile: any) => (
              <li key={profile.slug}>
                <Link
                  href={`/${profile.slug}`}
                  className="card flex items-center gap-4 hover:bg-[#1a2035]/80 !p-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a78bfa] flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {profile.name.charAt(0)}
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-semibold text-[#e8eaf0] truncate">
                      {profile.name}
                    </span>
                    <span className="block text-sm text-[#8b93a8] truncate">
                      /{profile.slug}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
