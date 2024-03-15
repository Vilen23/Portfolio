"use client";
import React from "react";
import Image from "next/image";
import Buttonppr from "./Buttonppr";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-justify sm:text-left">
          <h1 className="text-4xl lg:text-6xl mb-4 text-white font-extrabold sm:text-5xl text-center sm:text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700  to-orange-500">
              Hello, I'm{""}{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Shivam",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6 sm:text-lg   ">
            I am a Full Stack Web Developer with a passion for designing and
            building scalable, efficient and performant web applications. I have
            experience with a wide range of technologies and always eager to
            learn more.
          </p>
          <div className="place-self-center">
            <button className="px-6 py-3 mb-4 w-full sm:w-fit rounded-full mr-4 border-2 border-white  font-bold hover:bg-white hover:text-black">
              Hire Me
            </button>

            <Buttonppr text="Download CV" className="w-full sm:w-fit" />
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Shivam-removebg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
