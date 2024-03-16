"use client"
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import "tailwindcss/tailwind.css";
import AboutSection from "@/Components/Skills";
import Projects from "@/Components/Projects";
import EmailSection from "@/Components/EmailSection";

export default function Home() {
  return <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar/>
    <div className="container px-12 py-4 mx-auto mt-[64px]">
    <HeroSection/>
    <AboutSection/>
    <Projects/>
    <EmailSection/>
    </div>
  </main>;
}
