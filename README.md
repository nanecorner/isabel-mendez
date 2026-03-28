# Portafolio Profesional - Plantilla de Visualización

Esta es la aplicación principal (frontend) para visualizar los portafolios profesionales. Está construida con **Next.js 16**, **Tailwind CSS 4** y **Prisma v7**.

## 🛠️ Requisitos e Instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Configurar el entorno**:
   Copia el archivo `.env.example` a `.env.local` y completa las variables de Supabase y la URL de la base de datos:
   ```bash
   cp .env.example .env.local
   ```

3. **Generar el cliente de base de datos**:
   ```bash
   npx prisma generate
   ```

4. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

## ⚙️ Configuración (Variables de Entorno)

- `DATABASE_URL`: URL de conexión a PostgreSQL (Supabase).
- `NEXT_PUBLIC_SUPABASE_URL`: URL pública de tu instancia de Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Key anónima para el acceso al Storage.
- `NEXT_PUBLIC_PROFILE_SLUG`: El identificador (slug) del perfil que la plantilla debe renderizar por defecto.

## 🚀 Despliegue

Esta aplicación está optimizada para desplegarse en **Vercel** o **Netlify**. Asegúrate de:
1. Configurar todas las variables de entorno en el panel del proveedor.
2. El comando de construcción estándar (`npm run build`) se encargará de generar el cliente Prisma automáticamente.

## 📂 Estructura del Proyecto

- `/src/app`: Rutas del App Router de Next.js.
- `/prisma`: Esquema de la base de datos (`schema.prisma`).
- `/public`: Activos estáticos.
- `prisma.config.ts`: Configuración específica para el CLI de Prisma 7.
