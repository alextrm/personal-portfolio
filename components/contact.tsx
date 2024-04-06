"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  const renderHeadingBasedOnTheme = () => {
    if (theme === "light") {
      return "My contact";
    } else if (theme === "dark") {
      return "Mon contact";
    }
    // Default heading if theme is not "light" or "dark"
    return "My contact";
  };

  const renderTextBasedOnTheme = () => {
    if (theme === "light") {
      return (
        <p className="text-gray-700 -mt-6">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:tremeyalex@gmail.com">
            tremeyalex@gmail.com
          </a>
        </p>
      );
    } else if (theme === "dark") {
      return (
        <p className="text-gray-700 -mt-6">
          Veuillez me contacter directement à{" "}
          <a className="underline" href="mailto:tremeyalex@gmail.com">
            tremeyalex@gmail.com
          </a>
        </p>
      );
    }
    // Default text if theme is not "light" or "dark"
    return (
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:tremeyalex@gmail.com">
          tremeyalex@gmail.com
        </a>
      </p>
    );
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{renderHeadingBasedOnTheme()}</SectionHeading>
      {renderTextBasedOnTheme()}
    </motion.section>
  );
}
