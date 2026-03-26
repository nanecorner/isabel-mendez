"use client";

import type { FullProfile } from "@/types/profile";

export function ProfileNavbar({ profile }: { profile: FullProfile }) {
  // Solo mostramos los links si hay contenido en la sección correspondiente
  const links = [
    { label: "Inicio", href: "#inicio" },
    {
      label: "Trayectoria",
      href: "#trayectoria",
      show: profile.education.length > 0 || profile.experience.length > 0 || profile.teaching.length > 0,
    },
    {
      label: "Publicaciones",
      href: "#publicaciones",
      show: profile.publications.length > 0,
    },
    {
      label: "Galería",
      href: "#galeria",
      show: profile.gallery.length > 0,
    },
    {
      label: "Divulgación",
      href: "#divulgacion",
      show: profile.dissemination.length > 0,
    },
  ];

  return (
    <div className="profile-navbar">
      <div className="container-profile">
        <nav>
          {links
            .filter((link) => link.show !== false)
            .map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
        </nav>
      </div>
    </div>
  );
}
