// Tipos propios del perfil — sin dependencia de @prisma/client

export interface Profile {
  id: string;
  slug: string;
  name: string;
  photoUrl: string | null;
  bio: string;
  quote: string | null;
  cvUrl: string | null;
  themePrimary: string | null;
  themeSecondary: string | null;
  themeFont: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResearchLine {
  id: string;
  profileId: string;
  order: number;
  title: string;
  paragraphs: string[];
}

export interface Award {
  id: string;
  profileId: string;
  title: string;
  year: number | null;
}

export interface Society {
  id: string;
  profileId: string;
  name: string;
}

export interface Collaboration {
  id: string;
  profileId: string;
  name: string;
  url: string | null;
}

export interface Funding {
  id: string;
  profileId: string;
  name: string;
  url: string | null;
}

export interface Education {
  id: string;
  profileId: string;
  order: number;
  graduationDate: string;
  degree: string;
  institution: string;
  city: string | null;
  country: string | null;
}

export interface Experience {
  id: string;
  profileId: string;
  order: number;
  startDate: string;
  endDate: string | null;
  title: string;
  institution: string;
  city: string | null;
  country: string | null;
}

export interface Teaching {
  id: string;
  profileId: string;
  order: number;
  curriculum: string;
  course: string;
  institution: string;
  city: string | null;
  country: string | null;
}

export interface Publication {
  id: string;
  profileId: string;
  order: number;
  title: string;
  date: string;
  reference: string;
  pdfUrl: string | null;
  isDownloadable: boolean;
  externalUrl: string | null;
}

export interface GalleryItem {
  id: string;
  profileId: string;
  order: number;
  imageUrl: string;
  shortName: string;
  description: string | null;
}

export interface Dissemination {
  id: string;
  profileId: string;
  order: number;
  title: string;
  date: string | null;
  url: string | null;
}

export interface FooterLink {
  id: string;
  profileId: string;
  order: number;
  label: string;
  url: string;
  icon: string | null;
}

// Perfil completo con todas sus relaciones
export type FullProfile = Profile & {
  researchLines: ResearchLine[];
  awards: Award[];
  societies: Society[];
  collaborations: Collaboration[];
  fundings: Funding[];
  education: Education[];
  experience: Experience[];
  teaching: Teaching[];
  publications: Publication[];
  gallery: GalleryItem[];
  dissemination: Dissemination[];
  footerLinks: FooterLink[];
};
