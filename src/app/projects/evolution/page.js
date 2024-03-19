import ProjectNavbar from "@/app/components/ProjectNavbar";
import Footer from "@/app/components/Footer";
import React from "react";
import ProjectDescription from "@/app/projects/evolution/ProjectDescription";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <ProjectNavbar name={"Evolution Project"}/>
            <ProjectDescription />
            <Footer/>
        </main>
    );
}