// Tous les textes du site, dans les deux langues.
// Pas de "use client" ici : c'est de la donnée pure, utilisable partout.

export type Lang = "fr" | "en";

export type Entry = {
  title: string;
  subtitle?: string;
  period?: string;
  href?: string;
};

export type Copy = {
  nav: { about: string; education: string; experience: string; projects: string };
  description: string;
  education: Entry[];
  experience: Entry[];
  projects: Entry[];
};

export const profile = {
  name: "Thomas Gentilhomme",
  email: "t.gentilhomme@outlook.com",
  location: "Paris, France",
  linkedin: "https://www.linkedin.com/in/tgentilhomme/",
  github: "https://github.com/Thomas-Gentilhomme",
} as const;

const repo = (name: string) => `${profile.github}/${name}`;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const content: Record<Lang, Copy> = {
  fr: {
    nav: {
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
    },
    description: lorem,
    education: [
      {
        title: "Télécom Paris",
        subtitle: "Diplôme d'ingénieur en Intelligence Artificielle",
        period: "2017 – 2021",
      },
      {
        title: "HEC Paris",
        subtitle: "Master in Management, Grande École",
        period: "2019 – 2022",
      },
      {
        title: "École Polytechnique",
        subtitle: "Master PIC (Projet, Innovation, Conception)",
        period: "2021 – 2022",
      },
      {
        title: "EURECOM",
        subtitle: "Master Data Science",
        period: "2018 – 2019",
      },
    ],
    experience: [
      {
        title: "Ekimetrics",
        subtitle: "Senior AI & ML Engineer",
        period: "Nov. 2023 – aujourd'hui",
      },
      {
        title: "Veltys",
        subtitle: "Analyst, Data & Strategy",
        period: "Avr. – Oct. 2023",
      },
      {
        title: "Ubisoft",
        subtitle: "Strategic Innovation Lab Assistant (alternance)",
        period: "Sept. 2021 – Sept. 2022",
      },
      {
        title: "Ekimetrics",
        subtitle: "Data Science & Strategy Intern Consultant (stage)",
        period: "Mars – Août 2021",
      },
    ],
    projects: [
      {
        title: "Multi-Target Multi-Camera Tracking",
        subtitle: "Projet de master en vision par ordinateur",
        href: repo("AI-Project"),
      },
      {
        title: "Kaggle : House Pricing",
        subtitle: "Jupyter Notebook",
        href: repo("Kaggle-Challenge--House-Pricing"),
      },
      {
        title: "Anomaly Detection",
        subtitle: "Jupyter Notebook",
        href: repo("Anomaly-Detection"),
      },
      {
        title: "Kaggle : Plankton Images Classification",
        subtitle: "Jupyter Notebook",
        href: repo("Kaggle-Challenge--Plankton-Images-Classification"),
      },
      {
        title: "thomasgentilhomme.me",
        subtitle: "Ce site",
        href: repo("thomasgentilhomme.me"),
      },
    ],
  },
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
    },
    description: lorem,
    education: [
      {
        title: "Télécom Paris",
        subtitle: "Engineer's degree in Artificial Intelligence",
        period: "2017 – 2021",
      },
      {
        title: "HEC Paris",
        subtitle: "Master in Management, Grande École",
        period: "2019 – 2022",
      },
      {
        title: "École Polytechnique",
        subtitle: "Master PIC (Project, Innovation, Conception)",
        period: "2021 – 2022",
      },
      {
        title: "EURECOM",
        subtitle: "Master's degree in Data Science",
        period: "2018 – 2019",
      },
    ],
    experience: [
      {
        title: "Ekimetrics",
        subtitle: "Senior AI & ML Engineer",
        period: "Nov 2023 – present",
      },
      {
        title: "Veltys",
        subtitle: "Analyst, Data & Strategy",
        period: "Apr – Oct 2023",
      },
      {
        title: "Ubisoft",
        subtitle: "Strategic Innovation Lab Assistant (apprenticeship)",
        period: "Sep 2021 – Sep 2022",
      },
      {
        title: "Ekimetrics",
        subtitle: "Data Science & Strategy Intern Consultant (internship)",
        period: "Mar – Aug 2021",
      },
    ],
    projects: [
      {
        title: "Multi-Target Multi-Camera Tracking",
        subtitle: "Master's project in computer vision",
        href: repo("AI-Project"),
      },
      {
        title: "Kaggle: House Pricing",
        subtitle: "Jupyter Notebook",
        href: repo("Kaggle-Challenge--House-Pricing"),
      },
      {
        title: "Anomaly Detection",
        subtitle: "Jupyter Notebook",
        href: repo("Anomaly-Detection"),
      },
      {
        title: "Kaggle: Plankton Images Classification",
        subtitle: "Jupyter Notebook",
        href: repo("Kaggle-Challenge--Plankton-Images-Classification"),
      },
      {
        title: "thomasgentilhomme.me",
        subtitle: "This website",
        href: repo("thomasgentilhomme.me"),
      },
    ],
  },
};
