"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FullProfile } from "@/types/profile";

const NAV_LINKS = [
  { label: "Inicio",            href: "/" },
  { label: "Investigación",     href: "/investigacion" },
  { label: "Publicaciones",     href: "/publicaciones" },
  { label: "Tesis y Asesorías", href: "/asesorias" },
  { label: "Docencia",          href: "/docencia" },
  { label: "Divulgación",       href: "/divulgacion" },
];

export function ProfileNavbar({ profile }: { profile: FullProfile }) {
  const pathname = usePathname();

  return (
    <div className="profile-navbar">
      <div className="container-profile flex items-center justify-between">
        {/* Nombre breve a la izquierda */}
        <Link href="/" className="navbar-brand">
          {profile.name}
        </Link>

        {/* Navegación */}
        <nav>
          {NAV_LINKS.map((link) => {
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
