"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a {" "}
        <span className="font-medium">Mechanical engineering</span> student at EPFL in Lausanne, Switzerland. I have finished an internship in the  {" "}
        <span className="font-medium">R&D division of Rolex</span>, and I continue in the company to work on my Master's thesis, which will grant me my engineering diploma. I really enjoy working in R&D because it includes many differents tasks, such as {" "}
        <span className="italic">fiability, design, creation, innovation, optimization</span> and thus develops many of the skills I need as a mechanical engineer. 
        I also enjoy working in teams, where I can exchange ideas and debate solutions with others to be more efficient. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a mechanical engineer, starting from{" "}
        <span className="font-medium">October 2024</span>.
      </p>
    </motion.section>
  );
}
