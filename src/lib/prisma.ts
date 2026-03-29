import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pool: Pool | undefined;
};

function createPrismaClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn("DATABASE_URL is not defined in environment variables.");
    return { client: new PrismaClient(), pool: undefined };
  }

  // Pool de pg con límites agresivos para Serverless/Vercel
  const pool = new Pool({ 
    connectionString: url,
    max: 3, // Muy bajo para evitar saturar el pooler desde múltiples lambdas de Vercel
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });

  const adapter = new PrismaPg(pool as any);
  const client = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

  return { client, pool };
}

const { client, pool } = globalForPrisma.prisma && globalForPrisma.pool 
  ? { client: globalForPrisma.prisma, pool: globalForPrisma.pool }
  : createPrismaClient();

export const prisma = client;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = client;
  globalForPrisma.pool = pool;
}
