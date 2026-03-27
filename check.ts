import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const p = await prisma.profile.findUnique({ where: { slug: 'dr-juan-perez' } });
  console.log('DR JUAN DATA:', p?.themePrimary, p?.themeSecondary, p?.themeFont);
}

main().finally(() => prisma.$disconnect());
