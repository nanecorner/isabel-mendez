"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FullProfile } from "@/types/profile";

export function ProfileNavbar({ profile }: { profile: FullProfile }) {
  const pathname = usePathname();

  // Ya no usamos slug dinámico, todas las rutas parten de la raíz del dominio
  const links = [
    { label: "Inicio", href: "/" },
    {
      label: "Trayectoria",
      href: `/trayectoria`,
      show: profile.education.length > 0 || profile.experience.length > 0 || profile.teaching.length > 0,
    },
    {
      label: "Publicaciones",
      href: `/publicaciones`,
      show: profile.publications.length > 0,
    },
    {
      label: "Galería",
      href: `/galeria`,
      show: profile.gallery.length > 0,
    },
    {
      label: "Divulgación",
      href: `/divulgacion`,
      show: profile.dissemination.length > 0,
    },
  ];

  return (
    <div className="profile-navbar">
      <div className="container-profile">
        <nav>
          {links
            .filter((link) => link.show !== false)
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
        </nav>
      </div>
    </div>
  );
}
