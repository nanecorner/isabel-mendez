import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Limpiar datos existentes
  await prisma.footerLink.deleteMany();
  await prisma.dissemination.deleteMany();
  await prisma.galleryItem.deleteMany();
  await prisma.publication.deleteMany();
  await prisma.teaching.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.education.deleteMany();
  await prisma.funding.deleteMany();
  await prisma.collaboration.deleteMany();
  await prisma.society.deleteMany();
  await prisma.award.deleteMany();
  await prisma.researchLine.deleteMany();
  await prisma.profile.deleteMany();

  const profile = await prisma.profile.create({
    data: {
      slug: "dra-maria-garcia",
      name: "Dra. María García López",
      bio: "Investigadora en el área de biología molecular con más de 15 años de trayectoria académica en instituciones nacionales e internacionales. Su trabajo se centra en la interacción entre genética y medio ambiente.",
      quote: "La ciencia es la búsqueda de la verdad a través de la evidencia.",
      photoUrl: null,
      cvUrl: null,
      cvIsDownloadable: true,

      researchLines: {
        create: [
          {
            order: 0,
            title: "Genómica funcional",
            paragraphs: [
              "Estudio de la expresión génica en condiciones de estrés abiótico en plantas modelo.",
              "Análisis comparativo de transcriptomas en distintas especies vegetales.",
            ],
          },
          {
            order: 1,
            title: "Biología computacional",
            paragraphs: [
              "Desarrollo de pipelines bioinformáticos para el análisis de datos de secuenciación masiva.",
            ],
          },
        ],
      },

      awards: {
        create: [
          { title: "Premio Nacional de Ciencias 2022", year: 2022 },
          { title: "Distinción al Mérito Académico UNAM", year: 2019 },
        ],
      },

      societies: {
        create: [
          { name: "Sociedad Mexicana de Bioquímica" },
          { name: "American Society for Microbiology" },
        ],
      },

      collaborations: {
        create: [
          { name: "CINVESTAV — Unidad Irapuato", url: "https://cinvestav.mx" },
          { name: "Max Planck Institute for Plant Breeding", url: "https://mpipz.mpg.de" },
        ],
      },

      fundings: {
        create: [
          { name: "CONAHCYT — Proyecto CF-2022-1", url: "https://conahcyt.mx" },
          { name: "PAPIIT UNAM — IN203022" },
        ],
      },

      education: {
        create: [
          {
            order: 0,
            graduationDate: "2005",
            degree: "Licenciatura en Biología",
            institution: "UNAM, Ciudad de México",
          },
          {
            order: 1,
            graduationDate: "2008",
            degree: "Maestría en Ciencias Bioquímicas",
            institution: "UNAM, Ciudad de México",
          },
          {
            order: 2,
            graduationDate: "2012",
            degree: "Doctorado en Ciencias Biomédicas",
            institution: "UNAM, Ciudad de México",
          },
        ],
      },

      experience: {
        create: [
          {
            order: 0,
            startDate: "2013",
            endDate: "2015",
            title: "Investigadora Postdoctoral",
            institution: "Wageningen University, Países Bajos",
          },
          {
            order: 1,
            startDate: "2015",
            endDate: null,
            title: "Investigadora Titular A",
            institution: "Instituto de Biotecnología, UNAM",
          },
        ],
      },

      teaching: {
        create: [
          {
            order: 0,
            curriculum: "Licenciatura en Biología",
            course: "Biología Molecular",
            institution: "Facultad de Ciencias, UNAM",
          },
          {
            order: 1,
            curriculum: "Maestría en Ciencias Bioquímicas",
            course: "Genómica y Proteómica",
            institution: "Instituto de Biotecnología, UNAM",
          },
        ],
      },

      publications: {
        create: [
          {
            order: 0,
            title: "Transcriptomic analysis of drought stress response in Arabidopsis thaliana",
            date: "2023",
            reference:
              "García-López M., et al. (2023). Journal of Plant Biology, 45(2), 112–128. DOI: 10.1234/jpb.2023.001",
            pdfUrl: null,
            isDownloadable: false,
            externalUrl: "https://doi.org/10.1234/jpb.2023.001",
          },
          {
            order: 1,
            title: "Comparative genomics of nitrogen fixation pathways",
            date: "2021",
            reference:
              "García-López M., Martínez R. (2021). Molecular Plant, 14(8), 1320–1335. DOI: 10.1016/j.molp.2021.04.009",
            pdfUrl: null,
            isDownloadable: true,
            externalUrl: "https://doi.org/10.1016/j.molp.2021.04.009",
          },
        ],
      },

      gallery: {
        create: [
          {
            order: 0,
            imageUrl: "portafolios/dra-maria-garcia/gallery/lab-2023.webp",
            shortName: "Laboratorio 2023",
            description: "Equipo del laboratorio durante la toma de muestras.",
          },
          {
            order: 1,
            imageUrl: "portafolios/dra-maria-garcia/gallery/congreso-guadalajara.webp",
            shortName: "Congreso Guadalajara",
            description: "Presentación en el XII Congreso Nacional de Biotecnología.",
          },
        ],
      },

      dissemination: {
        create: [
          {
            order: 0,
            title: "Entrevista en Ciencia UNAM: ¿Qué es la genómica funcional?",
            date: "2023-06",
            url: "https://ciencia.unam.mx/leer/1234",
          },
          {
            order: 1,
            title: "Conferencia magistral — Feria del Libro de Guadalajara",
            date: "2022-11",
            url: null,
          },
          {
            order: 2,
            title: "Podcast: Mujeres en la Ciencia Mexicana",
            date: null,
            url: "https://open.spotify.com/episode/example",
          },
        ],
      },

      footerLinks: {
        create: [
          { order: 0, label: "Perfil ORCID", url: "https://orcid.org/0000-0000-0000-0000", icon: "orcid" },
          { order: 1, label: "Google Scholar", url: "https://scholar.google.com", icon: "scholar" },
          { order: 2, label: "ResearchGate", url: "https://researchgate.net", icon: "researchgate" },
          { order: 3, label: "Correo institucional", url: "mailto:mgarcia@ibt.unam.mx", icon: "mail" },
        ],
      },
    },
  });

  console.log(`✅ Perfil creado: ${profile.name} → /${profile.slug}`);

  // Segundo perfil de prueba
  const profile2 = await prisma.profile.create({
    data: {
      slug: "dr-juan-perez",
      name: "Dr. Juan Pérez Sánchez",
      bio: "Profesor e investigador en Ciencias Sociales con especialidad en historia urbana de América Latina. Apasionado por la recuperación de la memoria histórica a través de archivos fotográficos.",
      quote: "Quien no conoce su historia, está condenado a repetirla.",
      photoUrl: null,
      cvUrl: null,
      cvIsDownloadable: true,

      researchLines: {
        create: [
          {
            order: 0,
            title: "Historia Urbana Contemporánea",
            paragraphs: [
              "Análisis de la evolución espacial y social de las megalópolis latinoamericanas durante el siglo XX.",
            ],
          },
        ],
      },

      awards: {
        create: [
          { title: "Premio Nacional de Historia", year: 2020 },
        ],
      },

      societies: {
        create: [
          { name: "Asociación de Historiadores de América Latina" },
        ],
      },

      education: {
        create: [
          {
            order: 0,
            graduationDate: "1998",
            degree: "Licenciatura en Historia",
            institution: "Universidad Nacional Autónoma de México",
          },
          {
            order: 1,
            graduationDate: "2004",
            degree: "Doctorado en Historia",
            institution: "El Colegio de México",
          },
        ],
      },

      experience: {
        create: [
          {
            order: 0,
            startDate: "2005",
            endDate: null,
            title: "Profesor Investigador",
            institution: "Instituto de Investigaciones Históricas",
          },
        ],
      },

      publications: {
        create: [
          {
            order: 0,
            title: "La ciudad en transformación: crecimiento urbano 1950-1980",
            date: "2019",
            reference:
              "Pérez, J. (2019). Revista de Historia Urbana, 12(3), 45-62.",
            pdfUrl: null,
            isDownloadable: false,
            externalUrl: "https://ejemplo.com/publicacion1",
          },
        ],
      },
      
      dissemination: {
        create: [
          {
            order: 0,
            title: "Documental: Las calles olvidadas",
            date: "2021-08",
            url: "https://youtube.com/ejemplo",
          },
        ],
      },

      footerLinks: {
        create: [
          { order: 0, label: "Google Scholar", url: "https://scholar.google.com" },
          { order: 1, label: "Contacto", url: "mailto:jperez@ejemplo.com" },
        ],
      },
    },
  });

  console.log(`✅ Perfil creado: ${profile2.name} → /${profile2.slug}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
