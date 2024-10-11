import HiSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] h-full">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 h-full">
        <HiSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
