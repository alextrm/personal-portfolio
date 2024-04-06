import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const enlinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const enexperiencesData = [
  {
    title: "Master's thesis, Rolex SA",
    location: "Geneva, Switzerland",
    description:
      "I am doing my Master's thesis at Rolex in the R&D team.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2024  - Present",
  },
  {
    title: "Intern, Rolex",
    location: "Geneva, Switzerland",
    description:
      "I have done an internship at Rolex in the R&D team.",
    icon: React.createElement(CgWorkAlt),
    date: "09/2023 - 03/2024",
  },
  {
    title: "Member of the EPFL Racing Team",
    location: "Lausanne, Switzerland",
    description:
      "I have engaged in the EPFL Racing Team to help develop and construct an electric race car taking part in the Formula Student Competition. I was a member of the 'vehicle dynamics' division, supervising the car's direction, suspension, and braking.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Teaching Assistant, EPFL",
    location: "Lausanne, Switzerland",
    description:
    "I have worked as a teaching assistant in the courses 'Dynamical systems' and 'Continuum mechanics' at EPFL. The job of a teaching assistant is to help the younger students understand the fundamental concepts of the courses to succeed at the examinations.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  }
] as const;

export const eneducationData = [
  {
    title: "M.Sc. in Mechanical Engineering, EPFL",
    location: "Lausanne, Switzerland",
    description:
      "Slender structures, Composites & polymers, Aero-elasticity, Aerodynamics, Hydrodynamics, Biomechanics, Tribology, Project management, Logistics, Introduction to finance, Introduction to microeconomics, Innovation management ",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Academic exchange program, DTU",
    location: "Copenhagen, Denmark",
    description:
      "Materials, Structures, Fluid mechanics, Quantum mechanics, Satellite geodesy, Electrical machines, Controls",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "B.Sc. in Mechanical engineering, EPFL",
    location: "Lausanne, Switzerland",
    description: 
      "Structural mechanics, Dynamical systems, Calculus, Linear algebra, Thermodynamics, Fluids, Metals & Alloys, Mechanical systems, Programming for engineers, Numerical analysis, Continuum mechanics, Statistics",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
] as const;

export const enprojectsData = [
  {
    title: "Semester project at EPFL Racing Team",
    description:
      "I created a laptime simulator using Matlab, that includes various suspension parameter's such as toe or camber. These parameters allow to tune the car's suspensions by comparing the simulated results to the feelings of the driver, in order to get the best performing car for the races.",
    tags: ["Matlab", "Programming", "Vehicles dynamics", "Physics", "Simulation", "Teamwork"],
  },
  {
    title: "Watchmaking competition, EPFL",
    description:
      "I have developed a  demonstrator of the Tourbillon mechanism, that is a very popular mechanism in luxury watches. The demonstrator was fully designed and 3D printed to make it functional. Follow the link below to see it in action !",
    tags: ["CAD", "3D-print", "Design", "Construction"],
    link: "https://youtube.com/shorts/C_iseJ7fsd0?si=MzyZ1JGPvCK8O76b"
  },
  {
    title: "Freelance job for Nestlé",
    description:
      "I was engaged by Nestlé to design and produce a 3D model of a molecule meant to help R&D. Due to confidentiality, I cannot show my work.",
    tags: ["CAD", "3D-print"],
  },
] as const;

export const enskillsData = [
  "CAD",
  "Matlab",
  "Excel",
  "Latex",
  "Simulink",
  "Catia",
  "SolidWorks",
  "Git",
  "Fusion",
  "Ansys",
  "French native",
  "English C1",
  "German A2",
  "Chess",
  "Handball",
  "Surfing",
  "Skiing"

] as const;

export const frlinks = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "Intro",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const fulllinks = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#home",
  },
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Intro",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const frexperiencesData = [
  {
    title: "Thèse de master, Rolex SA",
    location: "Genève, Suisse",
    description:
      "J'effectue ma thèse de Matser chez Rolex dans l'équipe de Recherche & Développement.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2024  - Aujourd'hui",
  },
  {
    title: "Stagiaire, Rolex",
    location: "Genève, Suisse",
    description:
      "J'ai effectué un stage chez Rolex dans l'équipe de Recherche & Développement.",
    icon: React.createElement(CgWorkAlt),
    date: "09/2023 - 03/2024",
  },
  {
    title: "Membre de l'EPFL Racing Team",
    location: "Lausanne, Suisse",
    description:
      "Je me suis engagé à l'EPFL Racing Team pour aider le développement et la création d'une voiture de course électrique participant à la compétition Formula Student. J'étais un membre de l'équipe 'vehicle dynamics', prenant en charge la direction, la suspension et le freinage de la voiture.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Assistant-étudiant, EPFL",
    location: "Lausanne, Suisse",
    description:
    "J'ai travaille en tant qu'assistant étudiant dans les cours 'Systèmes dynamiques' et 'Mécanique des milieux continus' à l'EPFL. le travail d'un assistant-étudiant est d'aider les étudiant plus jeunes à comprendre les concepts fondamentaux des cours en vue de leurs examens.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  }
] as const;

export const freducationData = [
  {
    title: "Master en Génie Mécanique, EPFL",
    location: "Lausanne, Switzerland",
    description:
      "Mécanique des structures fines, Composites & polymères, Aéro-élasticité, Aérodynamique, Hydrodynamique, Biomécanique, Tribologie, Management de projet, Logistique, Introduction à la finance, Introduction à la micro-économie, Management de l'innovation ",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Aujourd'hui",
  },
  {
    title: "Programme d'échange académique, DTU",
    location: "Copenhague, Danemark",
    description:
      "Matériaux, Structures, Mécanique des fluides, Mécanique quantique, Localisation satellitaire, Machines éléctriques, Contrôle continu",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Bachelor en Génie Mécanique, EPFL",
    location: "Lausanne, Suisse",
    description: 
      "Mécanique des structures, Systèmes dynamiques, Mathématiques, Algèbre linéaire, Thermodynamique, Fluides, Métaux & alliages, Systèmes mécaniques, Programmation, Analyse numérique, Mécanique des milieux continus, Statistiques",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
] as const;

export const frprojectsData = [
  {
    title: "Projet de semestre à l'EPFL Racing Team",
    description:
      "J'ai créé un simulateur de temps au tour en utilisant Matlab, qui inclut lusieurs paramètres de suspension tels que l'angle de pincement ou l'angle de cambrure. Ces paramètres permettent d'optimiser la voiture en comparant les ré&sultats avec les ressentis du pilote, afin d'obtenir les meilleures performances pour les courses.",
    tags: ["Matlab", "Programmation", "Dynamique des véhicules", "Physique", "Simulation", "Travail d'équipe"],
  },
  {
    title: "Compétition horlogère, EPFL",
    description:
      "J'ai créé uin démonstrateur du mécanisme de tourbillon, très populaire dans la ahute horlogerie. ce démonstrateur a été entièrement designé et imprimé en 3D pour être fonctionnel. Cliquez sur le lien ci-dessous pour le voir en vidéo !",
    tags: ["CAD", "Impression 3D", "Design", "Construction"],
    link: "https://youtube.com/shorts/C_iseJ7fsd0?si=MzyZ1JGPvCK8O76b"
  },
  {
    title: "Travail freelance for Nestlé",
    description:
      "J'ai tét engagé par Nestlé pour designer et produire un modèle 3D d'une structure moléculaire, afin d'aider la division Recherche & Développement. Pour des raison de confidentialité, je peux peux pas illustrer mon travail.",
    tags: ["CAD", "Impression 3D"],
  },
] as const;

export const frskillsData = [
  "CAD",
  "Matlab",
  "Excel",
  "Latex",
  "Simulink",
  "Catia",
  "SolidWorks",
  "Git",
  "Fusion",
  "Ansys",
  "Français (langue natale)",
  "Anglais C1",
  "Allemand A2",
  "Echecs",
  "Handball",
  "Surf",
  "Ski"

] as const;
