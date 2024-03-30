import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import simulateur from "@/public/Aero_ideal.png";

export const links = [
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

export const experiencesData = [
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

export const educationData = [
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

export const projectsData = [
  {
    title: "Semester project at EPFL Racing Team",
    description:
      "I created a laptime simulator using Matlab, that includes various suspension parameter's such as toe or camber. These parameters allow to tune the car's suspensions by comparing the simulated results to the feelings of the driver, in order to get the best performing car for the races.",
    tags: ["Matlab", "Programming", "Vehicles dynamics", "Physics", "Simulation", "Teamwork"],
    imageUrl: simulateur,
  },
  {
    title: "Watchmaking competition, EPFL",
    description:
      "I have developed a  demonstrator of the Tourbillon mechanism, that is a very popular mechanism in luxury watches. The demonstrator was fully designed and 3D printed to make it functional. Follow the link below to see it in action !",
    tags: ["CAD", "3D-print", "Design", "Construction"],
    link: "https://youtube.com/shorts/C_iseJ7fsd0?si=MzyZ1JGPvCK8O76b"
  },
  {
    title: "Feelance job for Nestlé",
    description:
      "I was engaged by Nestlé to design and produce a 3D model of a molecule meant to help R&D. Due to confidentiality, I cannot show my work.",
    tags: ["CAD", "3D-print"],
  },
] as const;

export const skillsData = [
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
