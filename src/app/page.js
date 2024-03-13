import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
