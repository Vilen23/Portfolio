import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ image, title, description,gitUrl,depUrl }) => {
  return (
    <div className="group">
      <div
        className="h-52 md:h-72 rounded-t-xl relative"
        style={{
          background: `url(${image})`,
          backgroundSize: "contain",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500  justify-center items-center space-x-4">
          <Link href={gitUrl}>
            <CodeBracketIcon className="w-12 h-12 text-[#ADB7BE] hover:text-white cursor-pointer border-2 border-[#ADB7BE] p-2 rounded-full hover:border-white" />
          </Link>
          <Link href={depUrl}>
            <EyeIcon className="w-12 h-12 text-[#ADB7BE] hover:text-white cursor-pointer border-2 border-[#ADB7BE] p-2 rounded-full hover:border-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-[#181818] py-6 px-4 ">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;