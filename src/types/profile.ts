// ─────────────────────────────────────────────────────────
// Tipos propios del perfil académico — sin @prisma/client
// ─────────────────────────────────────────────────────────

export interface Profile {
  id: string;
  slug: string;
  name: string;
  title: string;           // Cargo actual
  institution: string;     // Institución actual
  photoUrl: string | null;
  bio: string;             // Párrafo introductorio
  email: string | null;
  phone: string | null;
  themePrimary: string | null;
  themeSecondary: string | null;
  themeFont: string | null;
}

/** SNI, PRIDE, etc. */
export interface AcademicLevel {
  id: string;
  label: string;   // ej. "SNI"
  value: string;   // ej. "Nivel II"
}

/** ORCID, Scopus, WoS, ResearchGate... */
export interface AcademicLink {
  id: string;
  label: string;
  url: string;
  icon: string | null; // "orcid" | "scopus" | "wos" | "scholar" | "mail"
}

/** Ítem de la línea de tiempo profesional en la home */
export interface CareerItem {
  id: string;
  period: string;        // ej. "2012 – presente"
  title: string;
  institution: string;
}

// ── INVESTIGACIÓN ───────────────────────────────────────

export interface ResearchLine {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

export type ProjectStatus = "vigente" | "concluido";

export interface FundedProject {
  id: string;
  code: string;          // ej. "PAPIIT IN223124"
  title: string;
  agency: string;        // ej. "DGAPA-UNAM"
  role: string;          // ej. "Responsable Técnica"
  period: string;        // ej. "2024–2026"
  status: ProjectStatus;
  budget: string | null; // ej. "$762,750.00"
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string | null;
}

export interface AcademicEvent {
  id: string;
  title: string;
  type: string; // e.g., "Ponencia", "Cartel", "Simposio"
  location: string;
  date: string;
}

// ── PUBLICACIONES ───────────────────────────────────────

export type PublicationType = "article" | "book" | "chapter" | "editorial" | "conference_abstract" | "proceedings" | "outreach";

export interface Publication {
  id: string;
  type: PublicationType;
  featured: boolean;     // true → aparece en sección destacada
  title: string;
  date: string;          // ej. "2026-01" o "2025"
  reference: string;     // referencia completa tal como se muestra
  pdfUrl: string | null;
  isDownloadable: boolean;
  externalUrl: string | null;
}

/** Roles editoriales */
export interface EditorialRole {
  id: string;
  role: string;          // ej. "Editora Asociada"
  journal: string;
  publisher: string | null;
  url: string | null;
}

// ── FORMACIÓN DE RR.HH. ─────────────────────────────────

export type ThesisLevel = "postdoc" | "doctorado" | "maestria" | "licenciatura";
export type ThesisStatus = "concluida" | "en_proceso";

export interface Thesis {
  id: string;
  level: ThesisLevel;
  status: ThesisStatus;
  studentName: string;
  thesisTitle: string;
  year: number | null;     // año de conclusión, null si en proceso
  institution: string;
}

export interface OtherAdvising {
  id: string;
  type: string;          // ej. "Servicio Social", "Estancia Delfín"
  description: string;
}

// ── DOCENCIA Y ACADEMIA ─────────────────────────────────

export type TeachingRole = "coordinadora" | "invitada" | "colaboradora";

export interface Course {
  id: string;
  name: string;
  role: TeachingRole;
  program: string;       // Posgrado, licenciatura, etc.
  institution: string;
  period: string | null;
}

export interface Committee {
  id: string;
  role: string;          // ej. "Evaluadora de proyectos PAPIIT"
  organization: string;
  period: string | null;
}

export interface Society {
  id: string;
  acronym: string;
  fullName: string;
  url: string | null;
}

// ── DIVULGACIÓN ─────────────────────────────────────────

export type OutreachType = "article" | "media" | "talk";

export interface OutreachItem {
  id: string;
  type: OutreachType;
  title: string;
  venue: string;         // Revista, programa de radio, evento, etc.
  date: string | null;
  url: string | null;
  embedUrl: string | null; // YouTube embed URL si aplica
  mediaType: string | null; // "radio" | "tv" | "prensa" | "video" | null
}

// ── FOOTER ──────────────────────────────────────────────

export interface FooterLink {
  id: string;
  label: string;
  url: string;
  icon: string | null;
}

export interface Training {
  id: string;
  title: string;
  institution: string;
  duration: string | null;
  date: string | null;
}

// ── PERFIL COMPLETO ─────────────────────────────────────

export type FullProfile = Profile & {
  levels: AcademicLevel[];
  academicLinks: AcademicLink[];
  career: CareerItem[];
  researchLines: ResearchLine[];
  projects: FundedProject[];
  awards: Award[];
  events: AcademicEvent[];
  training: Training[];

  publications: Publication[];
  editorialRoles: EditorialRole[];
  theses: Thesis[];
  otherAdvising: OtherAdvising[];
  courses: Course[];
  committees: Committee[];
  societies: Society[];
  outreach: OutreachItem[];
  footerLinks: FooterLink[];
};
