import type { Metadata } from "next";
import { profile } from "@/lib/profile-data";
import { ProfileNavbar } from "@/components/layout/ProfileNavbar";
import { ProfileFooter } from "@/components/layout/ProfileFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: profile.name,
    template: `%s`,
  },
  description: profile.bio,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col m-0 p-0 bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <div className="min-h-screen flex flex-col w-full">
          <ProfileNavbar profile={profile} />
          <main className="flex-grow">{children}</main>
          <ProfileFooter profile={profile} />
        </div>
      </body>
    </html>
  );
}

