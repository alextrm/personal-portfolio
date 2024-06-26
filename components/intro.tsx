"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import alexportrait from "@/public/photo_cv_sans_fond.png";
import { useTheme } from "@/context/theme-context";

export default function Intro() {
  const {theme} = useTheme();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  const renderTextBasedOnTheme = () => {
    if (theme === "light") {
      return (
        <>
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I'm Alex.</span> I'm a{" "}
            <span className="font-bold">mechanical engineering student</span> with{" "}
            <span className="font-bold">1 year</span> of industry experience. I enjoy
            working on <span className="italic">R&D projects</span>.
          </motion.h1>
        </>
      );
    } else if (theme === "dark") {
      return (
        <>
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Bonjour, je m'appelle Alex.</span> Je suis un{" "}
            <span className="font-bold">étudiant en génie mécanique</span> avec{" "}
            <span className="font-bold">1 an</span> d'expérience en industrie. J'aime travailler sur
            des <span className="italic">projets de R&D</span>.
          </motion.h1>
        </>
      );
    }
    // Default content if theme is not "light" or "dark"
    return (
      <>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Alex.</span> I'm a{" "}
          <span className="font-bold">mechanical engineering student</span> with{" "}
          <span className="font-bold">1 year</span> of industry experience. I enjoy
          working on <span className="italic">R&D projects</span>.
        </motion.h1>
      </>
    );
  };

  const renderButtonBasedOnTheme = () => {
    if (theme === "light") {
      return (
        <>
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
            href="/Grades.pdf"
            download
          >
            Download grades and references{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="bg-white p-7 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.1] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
            href="https://www.linkedin.com/in/alex-tremey-8a19381b4/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </>
      );
    } else if (theme === "dark") {
      return (
        <>
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Me contacter ici{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
            href="/CV_Alex_TREMEY.pdf"
            download
          >
            Télécharger CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
            href="/Notes.pdf"
            download
          >
            Télécharger notes et références{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
            className="bg-white p-7 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.1] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
            href="https://www.linkedin.com/in/alex-tremey-8a19381b4/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </>
      );
    }
    // Default content if theme is not "light" or "dark"
    return (
      <>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
          href="/Grades.pdf"
          download
        >
          Download grades and references{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-7 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.1] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack "
          href="https://www.linkedin.com/in/alex-tremey-8a19381b4/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </>
    );
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={alexportrait}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      {renderTextBasedOnTheme()}

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {renderButtonBasedOnTheme()}
      </motion.div>
    </section>
  );
}

