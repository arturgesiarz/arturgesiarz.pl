"use client"
import React, { useState } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";

const projectsData = [
    {
        id : 1,
        title: "Example title 1",
        description: "Project 1 description",
        image: "/images/projects/1.jpg",
        tag: ["All", "Graphics"],
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
        tag: ["All","Mobile"],
        gitUrl: "",
        previewUrl: ""
    },
    {
        id : 4,
        title: "Example title 4",
        description: "Project 4 description",
        image: "/images/projects/4.jpg",
        tag: ["All", "Graphics"],
        gitUrl: "",
        previewUrl: ""
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag)
    )

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange}
                            name="All"
                            isSelected={tag === "All"}
                />
                <ProjectTag onClick={handleTagChange}
                            name="Web"
                            isSelected={tag === "Web"}
                />
                <ProjectTag onClick={handleTagChange}
                            name="Mobile"
                            isSelected={tag === "Mobile"}
                />
                <ProjectTag onClick={handleTagChange}
                            name="Graphics"
                            isSelected={tag === "Graphics"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
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