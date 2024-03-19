import ProjectNavbar from "@/app/components/ProjectNavbar";
import Footer from "@/app/components/Footer";
import ProjectDescription from "@/app/projects/hawaii_snake/ProjectDescription";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <ProjectNavbar name={"Hawaii Snake Project"}/>
            <ProjectDescription />
            <Footer/>
        </main>
    );
}