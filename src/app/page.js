import HiSection from "@/app/components/HiSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24  mx-auto px-12 py-4">
          <HiSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
      </div>
      <Footer/>
    </main>
  );
}
