"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { enprojectsData, frprojectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { theme } = useTheme();
  const projectsData = theme === "light" ? enprojectsData : frprojectsData;
  const renderHeadingBasedOnTheme = () => {
    if (theme === "light") {
      return "My projects";
    } else if (theme === "dark") {
      return "Mes projets";
    }
    // Default heading if theme is not "light" or "dark"
    return "My projects";
  };
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{renderHeadingBasedOnTheme()}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
