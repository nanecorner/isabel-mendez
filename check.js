import "dotenv/config";
import { prisma } from "./src/lib/prisma";

async function main() {
  const p = await prisma.profile.findUnique({ where: { slug: 'dr-juan-perez' } });
  console.log('DR JUAN DATA:', p?.themePrimary, p?.themeSecondary, p?.themeFont);
}

main();
