import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import "tailwindcss/tailwind.css";


export default function Home() {
  return <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar/>
    <div className="container px-12 py-4 mx-auto mt-[64px]">
    <HeroSection/>
    </div>
  </main>;
}
