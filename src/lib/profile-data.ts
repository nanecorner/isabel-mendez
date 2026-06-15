// ─────────────────────────────────────────────────────────
// DATOS HARDCODEADOS DEL PERFIL
// Edita este archivo para actualizar la información del sitio
// ─────────────────────────────────────────────────────────

import type { FullProfile } from "@/types/profile";

export const profile: FullProfile = {
  id: "isabel-mendez",
  slug: "isabel-mendez",
  name: "Dra. Isabel Méndez",
  photoUrl: null,
  bio: "Investigadora en biología molecular y biomedicina con más de 20 años de trayectoria en el estudio de enfermedades infecciosas y salud pública. Doctora por la UNAM con posdoctorado en la Universidad de Barcelona.",
  quote: "La ciencia es el mejor instrumento que tenemos para entender el mundo.",
  cvUrl: null,
  themePrimary: "#0f172a",
  themeSecondary: "#6366f1",
  themeFont: "Montserrat",
  password: null,
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2024-01-01"),

  // ── Líneas de Investigación ──────────────────────────────
  researchLines: [
    {
      id: "rl-1",
      profileId: "isabel-mendez",
      order: 0,
      title: "Microbiología e Infección",
      paragraphs: [
        "Estudio de los mecanismos moleculares de patógenos bacterianos y virales en el contexto de la respuesta inmune del huésped.",
        "Desarrollo de nuevas estrategias terapéuticas basadas en la modulación del microbioma intestinal.",
      ],
    },
    {
      id: "rl-2",
      profileId: "isabel-mendez",
      order: 1,
      title: "Epidemiología Computacional",
      paragraphs: [
        "Modelado matemático y computacional de la dinámica de transmisión de enfermedades infecciosas emergentes.",
        "Análisis de grandes bases de datos genómicos para identificar determinantes de virulencia.",
      ],
    },
  ],

  // ── Reconocimientos ─────────────────────────────────────
  awards: [
    { id: "aw-1", profileId: "isabel-mendez", title: "Premio Nacional de Ciencias y Artes", year: 2022 },
    { id: "aw-2", profileId: "isabel-mendez", title: "Distinción Universidad Nacional para Jóvenes Académicos – UNAM", year: 2018 },
    { id: "aw-3", profileId: "isabel-mendez", title: "Beca Conacyt de Investigación Básica", year: 2015 },
  ],

  // ── Sociedades Científicas ───────────────────────────────
  societies: [
    { id: "soc-1", profileId: "isabel-mendez", name: "Sociedad Mexicana de Microbiología" },
    { id: "soc-2", profileId: "isabel-mendez", name: "American Society for Microbiology" },
    { id: "soc-3", profileId: "isabel-mendez", name: "Sociedad Española de Microbiología" },
  ],

  // ── Colaboraciones ──────────────────────────────────────
  collaborations: [
    { id: "col-1", profileId: "isabel-mendez", name: "Instituto Nacional de Salud Pública (INSP)", url: "https://www.insp.mx" },
    { id: "col-2", profileId: "isabel-mendez", name: "Wellcome Sanger Institute", url: "https://www.sanger.ac.uk" },
    { id: "col-3", profileId: "isabel-mendez", name: "Red de Investigación en Enfermedades Infecciosas – RIEI", url: null },
  ],

  // ── Financiamientos ─────────────────────────────────────
  fundings: [
    { id: "fun-1", profileId: "isabel-mendez", name: "CONAHCYT – Ciencia Básica y de Frontera", url: "https://conahcyt.mx" },
    { id: "fun-2", profileId: "isabel-mendez", name: "PAPIIT-UNAM IA209524", url: null },
    { id: "fun-3", profileId: "isabel-mendez", name: "Fundación Burroughs Wellcome Fund", url: "https://www.bwfund.org" },
  ],

  // ── Formación Educativa ──────────────────────────────────
  education: [
    {
      id: "edu-1",
      profileId: "isabel-mendez",
      order: 0,
      graduationDate: "2008",
      degree: "Doctorado en Ciencias Biomédicas",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      city: "Ciudad de México",
      country: "México",
    },
    {
      id: "edu-2",
      profileId: "isabel-mendez",
      order: 1,
      graduationDate: "2010",
      degree: "Posdoctorado en Microbiología Molecular",
      institution: "Universidad de Barcelona",
      city: "Barcelona",
      country: "España",
    },
    {
      id: "edu-3",
      profileId: "isabel-mendez",
      order: 2,
      graduationDate: "2003",
      degree: "Licenciatura en Biología",
      institution: "Universidad Autónoma de Guadalajara",
      city: "Guadalajara",
      country: "México",
    },
  ],

  // ── Experiencia Profesional ──────────────────────────────
  experience: [
    {
      id: "exp-1",
      profileId: "isabel-mendez",
      order: 0,
      startDate: "2012",
      endDate: null,
      title: "Investigadora Titular C",
      institution: "Instituto de Investigaciones Biomédicas – UNAM",
      city: "Ciudad de México",
      country: "México",
    },
    {
      id: "exp-2",
      profileId: "isabel-mendez",
      order: 1,
      startDate: "2010",
      endDate: "2012",
      title: "Investigadora Posdoctoral",
      institution: "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán",
      city: "Ciudad de México",
      country: "México",
    },
  ],

  // ── Docencia ─────────────────────────────────────────────
  teaching: [
    {
      id: "tea-1",
      profileId: "isabel-mendez",
      order: 0,
      curriculum: "Doctorado en Ciencias Biomédicas",
      course: "Microbiología Avanzada",
      institution: "UNAM",
      city: "Ciudad de México",
      country: "México",
    },
    {
      id: "tea-2",
      profileId: "isabel-mendez",
      order: 1,
      curriculum: "Maestría en Ciencias Bioquímicas",
      course: "Epidemiología Molecular",
      institution: "UNAM",
      city: "Ciudad de México",
      country: "México",
    },
    {
      id: "tea-3",
      profileId: "isabel-mendez",
      order: 2,
      curriculum: "Licenciatura en Biología",
      course: "Biología Celular y Molecular",
      institution: "Facultad de Ciencias – UNAM",
      city: "Ciudad de México",
      country: "México",
    },
  ],

  // ── Publicaciones ────────────────────────────────────────
  publications: [
    {
      id: "pub-1",
      profileId: "isabel-mendez",
      order: 0,
      title: "Gut microbiome dynamics during antibiotic treatment in Mexican cohort patients",
      date: "2024-03",
      reference: "Méndez I., García L., Torres R. (2024). Cell Host & Microbe, 31(3), 412–427.",
      pdfUrl: null,
      isDownloadable: false,
      externalUrl: "https://doi.org/10.1016/j.chom.2024.01.005",
    },
    {
      id: "pub-2",
      profileId: "isabel-mendez",
      order: 1,
      title: "Resistencia antimicrobiana en Enterobacterias: análisis genómico en hospitales de México",
      date: "2023-08",
      reference: "Méndez I., Sánchez P., Ramos C. (2023). Revista Latinoamericana de Microbiología, 65(2), 88–101.",
      pdfUrl: null,
      isDownloadable: false,
      externalUrl: null,
    },
    {
      id: "pub-3",
      profileId: "isabel-mendez",
      order: 2,
      title: "Molecular epidemiology of SARS-CoV-2 variants in central Mexico",
      date: "2022-05",
      reference: "Méndez I., Cruz V., Juárez A., et al. (2022). PLOS Pathogens, 18(5), e1010523.",
      pdfUrl: null,
      isDownloadable: false,
      externalUrl: "https://doi.org/10.1371/journal.ppat.1010523",
    },
    {
      id: "pub-4",
      profileId: "isabel-mendez",
      order: 3,
      title: "Caracterización de bacteriófagos líticos contra Pseudomonas aeruginosa multirresistente",
      date: "2020-11",
      reference: "Méndez I., Flores M. (2020). Journal of Bacteriology, 202(22), e00381-20.",
      pdfUrl: null,
      isDownloadable: false,
      externalUrl: "https://doi.org/10.1128/JB.00381-20",
    },
  ],

  // ── Galería ───────────────────────────────────────────────
  gallery: [
    {
      id: "gal-1",
      profileId: "isabel-mendez",
      order: 0,
      imageUrl: "/gallery/lab-1.jpg",
      shortName: "Laboratorio de Microbiología",
      description: "Vista del laboratorio principal en el IIBm-UNAM",
    },
    {
      id: "gal-2",
      profileId: "isabel-mendez",
      order: 1,
      imageUrl: "/gallery/congreso-1.jpg",
      shortName: "Congreso ASM 2023",
      description: "Presentación oral en el congreso anual de la American Society for Microbiology",
    },
    {
      id: "gal-3",
      profileId: "isabel-mendez",
      order: 2,
      imageUrl: "/gallery/equipo-1.jpg",
      shortName: "Equipo de Investigación",
      description: "Reunión de inicio de año con el equipo del laboratorio",
    },
  ],

  // ── Divulgación y Difusión ───────────────────────────────
  dissemination: [
    {
      id: "div-1",
      profileId: "isabel-mendez",
      order: 0,
      title: "¿Por qué los antibióticos están dejando de funcionar? – Charla TEDx UNAM",
      date: "2023-09",
      url: "https://www.ted.com/talks",
    },
    {
      id: "div-2",
      profileId: "isabel-mendez",
      order: 1,
      title: "Entrevista: El microbioma y la salud mental – Podcast Ciencia en Voz Alta",
      date: "2023-02",
      url: null,
    },
    {
      id: "div-3",
      profileId: "isabel-mendez",
      order: 2,
      title: "Artículo de divulgación: Los virus que pueden salvar vidas – Ciencia UNAM",
      date: "2022-07",
      url: "https://ciencia.unam.mx",
    },
    {
      id: "div-4",
      profileId: "isabel-mendez",
      order: 3,
      title: "Ciclo de conferencias: Enfermedades Emergentes del Siglo XXI – Facultad de Medicina UNAM",
      date: "2021",
      url: null,
    },
  ],

  // ── Footer Links ─────────────────────────────────────────
  footerLinks: [
    { id: "fl-1", profileId: "isabel-mendez", order: 0, label: "Correo", url: "mailto:imendez@iibiomedicas.unam.mx", icon: "mail" },
    { id: "fl-2", profileId: "isabel-mendez", order: 1, label: "Google Scholar", url: "https://scholar.google.com", icon: "scholar" },
    { id: "fl-3", profileId: "isabel-mendez", order: 2, label: "ResearchGate", url: "https://www.researchgate.net", icon: "researchgate" },
    { id: "fl-4", profileId: "isabel-mendez", order: 3, label: "ORCID", url: "https://orcid.org", icon: "orcid" },
  ],
};
