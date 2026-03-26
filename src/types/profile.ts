import type {
  Profile,
  ResearchLine,
  Award,
  Society,
  Collaboration,
  Funding,
  Education,
  Experience,
  Teaching,
  Publication,
  GalleryItem,
  Dissemination,
  FooterLink,
} from "@prisma/client";

// Perfil completo con todas sus relaciones — usado en la página pública
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

// Re-exportamos los tipos de Prisma para conveniencia
export type {
  Profile,
  ResearchLine,
  Award,
  Society,
  Collaboration,
  Funding,
  Education,
  Experience,
  Teaching,
  Publication,
  GalleryItem,
  Dissemination,
  FooterLink,
};
