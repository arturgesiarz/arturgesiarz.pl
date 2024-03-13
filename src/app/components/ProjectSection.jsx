import React from "react";
import ProjectCard from "@/app/components/ProjectCard";

const projectsData = [
    {
        id : 1,
        title: "Example title 1",
        description: "Project 1 description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: ""
    },
    {
        id : 2,
        title: "Example title 2",
        description: "Project 2 description",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: ""
    },
    {
        id : 3,
        title: "Example title 3",
        description: "Project 3 description",
        image: "/images/projects/3.jpg",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: ""
    },
    {
        id : 4,
        title: "Example title 4",
        description: "Project 4 description",
        image: "/images/projects/4.jpg",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: ""
    },
]

const ProjectSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
                    All
                </button>
                <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
                    Web
                </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => (
                        <ProjectCard key={project.id}
                                     title={project.title}
                                     description={project.description}
                                     imgUrl={project.image}
                                     gitUrl={project.gitUrl}
                                     previewUrl={project.previewUrl}
                                     tags={project}/>
                    ))
                }
            </div>
        </>
    )
}

export default ProjectSection