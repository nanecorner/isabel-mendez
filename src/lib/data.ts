import { prisma } from "@/lib/prisma";

/**
 * Query mínima para obtener los datos de una sección específica del perfil.
 * Evita traer el perfil completo en cada page cuando el layout ya lo cargó.
 */

function getSlug() {
  const slug = process.env.NEXT_PUBLIC_PROFILE_SLUG;
  if (!slug) throw new Error("NEXT_PUBLIC_PROFILE_SLUG no está definido");
  return slug;
}

export async function getProfileName() {
  const slug = getSlug();
  return prisma.profile.findUnique({
    where: { slug },
    select: { name: true },
  });
}

export async function getProfileForTrajectory() {
  const slug = getSlug();
  return prisma.profile.findUnique({
    where: { slug },
    select: {
      cvUrl: true,
      education:  { orderBy: { order: "asc" } },
      experience: { orderBy: { order: "asc" } },
      teaching:   { orderBy: { order: "asc" } },
    },
  });
}

export async function getProfileForPublications() {
  const slug = getSlug();
  return prisma.profile.findUnique({
    where: { slug },
    select: {
      publications: { orderBy: { order: "asc" } },
    },
  });
}

export async function getProfileForGallery() {
  const slug = getSlug();
  return prisma.profile.findUnique({
    where: { slug },
    select: {
      gallery: { orderBy: { order: "asc" } },
    },
  });
}

export async function getProfileForDissemination() {
  const slug = getSlug();
  return prisma.profile.findUnique({
    where: { slug },
    select: {
      dissemination: { orderBy: { order: "asc" } },
    },
  });
}
