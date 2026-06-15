# Portafolio de Isabel Méndez

Sitio web estático construido con **Next.js 16** y **Tailwind CSS 4**.

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

## ✏️ Editar contenido

Todos los datos del perfil están en un solo archivo:

```
src/lib/profile-data.ts
```

Edita ese archivo para actualizar nombre, biografía, publicaciones, trayectoria, galería, etc.

## 🖼️ Imágenes

Coloca las imágenes en `/public/` y referencialas con rutas relativas, por ejemplo:

- `/foto-perfil.jpg` para `photoUrl`
- `/gallery/congreso.jpg` para imágenes de la galería
- URL directa a un PDF externo para `cvUrl`

## 📦 Despliegue

```bash
npm run build
```

Compatible con **Vercel**, **Netlify** o cualquier hosting de archivos estáticos.
