import React from "react";
import Title from "./Title";
import { HoverEffect } from "./CardHover";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiPrisma
} from "react-icons/si";

const AboutSection = () => {
  const skills = [
    {
      title: "Next.js",
      icon: SiNextdotjs ,
    },
    {
      title: "React",
      icon: SiReact,
    },
    {
      title:"Typescript",
      icon:SiTypescript
    },
    {
      title: "Node.js",
      icon: SiNodedotjs ,
    },
    {
      title: "Prisma",
      icon: SiPrisma ,
    },
    {
      title: "Express.js",
      icon: SiExpress ,
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
    },
    {
      title: "Postgresql",
      icon: SiPostgresql ,
    },
    {
      title: "TailwindCSS",
      icon: SiTailwindcss ,
    },

    
  ];

  return (
    <div className="flex justify-center mt-20 cursor-pointer mx-auto px-8" id="skills">
      <div className="w-[800px]">
        <div className="flex justify-center mt-20 -rotate-6">
          <Title heading="Skills 🔪" />
        </div>
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};

export default AboutSection;
