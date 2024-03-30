"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string; // Make imageUrl optional
  link?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className={`${
          imageUrl
            ? "grid grid-cols-[50%,50%] gap-8"
            : "grid grid-cols-1"
        } bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[100%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-600 hover:underline"
            >
              Watch the Video
            </a>
          )}
        </div>

        {imageUrl && (
          <div className="relative hidden sm:block  top-1/4 right-5 ">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="h-1/2 rounded-t-lg shadow-2xl"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
}