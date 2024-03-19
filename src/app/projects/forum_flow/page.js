import ProjectNavbar from "@/app/components/ProjectNavbar";
import ProjectDescription from "@/app/projects/forum_flow/ProjectDescription";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <ProjectNavbar name={"Forum Flow Project"}/>
            <ProjectDescription />
        </main>
    );
}