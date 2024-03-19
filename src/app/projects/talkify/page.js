import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectDescription from "@/app/projects/talkify/ProjectDescription";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <ProjectNavbar name={"Talkify Project"}/>
            <ProjectDescription />
        </main>
    );
}