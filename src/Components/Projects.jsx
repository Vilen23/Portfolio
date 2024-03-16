import React from "react";
import { LampDemo, Sparkle, SparklesCore } from "./Lamp";
import { PinContainer } from "./Pin";

function Projects() {
  const projects = [
    {
      title: "Medium Like website",
      description:
        "Users can share their thoughts on the internet with this platform of ours",
        techstack:"React,Typescript, Postgres, Cloudflare Workers, Tailwind CSS ",
      image: "/images/image.png",
      gitUrl: "https://github.com/Vilen23/Medium",
      depUrl: "https://medium-zeta.vercel.app/",
    },
    {
      title: "Blog website",
      description: "Blogging website with user authentication and authorization and admin panel to manage the blogs.",
      techstack:"React, Tailwind CSS, MongoDB, Node.js, Express.js",
      image: "/images/LatherBlog.png",
      gitUrl: "https://github.com/Vilen23/Blog",
      depUrl: "https://github.com/Vilen23/Blog",
    },
    {
      title: "Portfolio website",
      description: "My portfolio website built using Next.js and Tailwind CSS with Aceternity UI",
      techstack:"Next.js, Tailwind CSS, Aceternity UI",
      image: "/images/Portfolio.png",
      gitUrl: "https://github.com/Vilen23/Medium",
      depUrl: "https://medium-zeta.vercel.app/",
    },
    {
      title:"Payment Application",
      description:"Payment application where users can send money to others",
      techstack:"React, Tailwind CSS, MongoDB, Node.js, Express.js",
      image:"/images/Lpay.png",
      gitUrl:"",
      depUrl:"https://payment-app-gilt.vercel.app/"
    },
    
  ];
  console.log(projects[0].image);
  return (
    <div className="" id="projects" >
      <LampDemo/>
      <div className="grid md:grid-cols-3 gap-4 mt-[-200px]  ">
        {projects.map((project, index) => (
          <AnimatedPinDemo
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            gitUrl={project.gitUrl}
            depUrl={project.depUrl}
            techstack={project.techstack}
          />
        ))}
      </div>
    </div>
  );
}
export function AnimatedPinDemo({ title, description, image, gitUrl, depUrl,techstack }) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center " onClick={()=>{
        window.location.href=depUrl
    }}>
      <PinContainer  title={description} href={gitUrl} techstack={techstack}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div>
            <p className="text-sm text-slate-100/50 line-clamp-2">{description}</p>
          </div>
          <div
            className=" h-[200px] w-[368px] relative mt-1"
            style={{
              background: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </PinContainer>
    </div>
  );
}
export default Projects;
