"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();

  const renderTextBasedOnTheme = () => {
    if (theme === "light") {
      return (
        <p className="mb-3">
          I am a{" "}
          <span className="font-medium">Mechanical engineering</span> student at EPFL in Lausanne, Switzerland. I have finished an internship in the{" "}
          <span className="font-medium">R&D division of Rolex</span>, and I continue in the company to work on my Master's thesis, which will grant me my engineering diploma. I really enjoy working in R&D because it includes many different tasks, such as{" "}
          <span className="italic">reliability, design, creation, innovation, optimization</span> and thus develops many of the skills I need as a mechanical engineer.
          I also enjoy working in teams, where I can exchange ideas and debate solutions with others to be more efficient. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a mechanical engineer, starting from{" "}
          <span className="font-medium">October 2024</span>.
        </p>
      );
    } else if (theme === "dark") {
      return (
        <p className="mb-3">
        Je suis un étudiant en{" "}
          <span className="font-medium">Génie Mécanique</span> à l'EPFL à Lausanne, en Suisse. J'ai terminé un stage dans la division{" "}
          <span className="font-medium">Recherche et Développement de Rolex</span>, et je continue dans l'entreprise pour effectuer ma Thèse de Master, qui me permettra d'obtenir mon diplôme d'ingénieur. J'aime travailler en R&D car cela me permet de travailler sur plusieurs aspects du produit, tel que la{" "}
          <span className="italic">fiabilité, le design, la creation, l'innovation, l'optimisation</span> et donc apprendre des compétences nécéssaire pour un ingénieur mécanique.
          J'aime travailler en équipe, pour pouvoir échanger des idées et discuter de solutions. Je recherche actuellement un{" "}
          <span className="font-medium">CDI</span> en tant qu'ingénieur mécanique, à partir d'{" "}
          <span className="font-medium">Octobre 2024</span>.
      </p>
      );
    }
    // Default text if theme is not "light" or "dark"
    return (
      <p className="mb-3">
          I am a{" "}
          <span className="font-medium">Mechanical engineering</span> student at EPFL in Lausanne, Switzerland. I have finished an internship in the{" "}
          <span className="font-medium">R&D division of Rolex</span>, and I continue in the company to work on my Master's thesis, which will grant me my engineering diploma. I really enjoy working in R&D because it includes many different tasks, such as{" "}
          <span className="italic">reliability, design, creation, innovation, optimization</span> and thus develops many of the skills I need as a mechanical engineer.
          I also enjoy working in teams, where I can exchange ideas and debate solutions with others to be more efficient. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a mechanical engineer, starting from{" "}
          <span className="font-medium">October 2024</span>.
        </p>
    );
  };

  const renderHeadingBasedOnTheme = () => {
    if (theme === "light") {
      return "About me";
    } else if (theme === "dark") {
      return "A propos de moi";
    }
    // Default heading if theme is not "light" or "dark"
    return "About me";
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{renderHeadingBasedOnTheme()}</SectionHeading>
      {renderTextBasedOnTheme()}
    </motion.section>
  );
}
