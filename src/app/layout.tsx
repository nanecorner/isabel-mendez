import type { Metadata } from "next";
import { profile } from "@/lib/profile-data";
import { ProfileNavbar } from "@/components/layout/ProfileNavbar";
import { ProfileFooter } from "@/components/layout/ProfileFooter";
import "./globals.css";

/** Determines if a hex color is perceptually "light" (luma > 0.55) */
function isLightColor(hex: string): boolean {
  const h = hex.replace("#", "");
  if (h.length !== 6) return false;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55;
}

export const metadata: Metadata = {
  title: profile.name,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const primary   = profile.themePrimary  || "#ffffff";
  const secondary = profile.themeSecondary || "#000000";
  const font      = profile.themeFont      || "Montserrat";
  const light     = isLightColor(primary);

  const themeVars = {
    "--color-bg-custom":      primary,
    "--color-accent-custom":  secondary,
    "--font-family-custom":   `"${font}", sans-serif`,
    "--color-text":    light ? "#111827"              : "#f1f5f9",
    "--color-muted":   light ? "#4b5563"              : "#94a3b8",
    "--color-border":  light ? "rgba(0,0,0,0.12)"     : "rgba(255,255,255,0.14)",
    "--color-surface": light ? "rgba(0,0,0,0.04)"     : "rgba(255,255,255,0.06)",
    "--color-card":    light ? "rgba(0,0,0,0.025)"    : "rgba(255,255,255,0.04)",
  } as React.CSSProperties;

  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col m-0 p-0">
        <div
          className="min-h-screen flex flex-col w-full custom-theme-wrapper"
          style={themeVars}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
          `}</style>

          <ProfileNavbar profile={profile} />
          <main className="flex-grow">{children}</main>
          <ProfileFooter profile={profile} />
        </div>
      </body>
    </html>
  );
}
