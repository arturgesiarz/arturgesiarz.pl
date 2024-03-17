"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView} from "framer-motion";

const projectsData = [
    {
        id : 1,
        title: "Evolution Project",
        description: "The project concerned the simulation of animal evolution through reproduction, " +
            "struggle for food and death. The project was made in Java with the JavaFX library",
        image: "/images/projects/1.jpg",
        tag: ["All", "Graphics"],
        gitUrl: "",
        previewUrl: "/projects/evolution"
    },
    {
        id : 2,
        title: "Forum Flow Project",
        description: "The web application project was about making a Facebook-like website " +
            "where you can create an account, insert a post, react to it, give a comment " +
            "and create a discussion topic. The backend of the project is written in Java using Spring" +
            " and a MySQL database. The frontend is written in JavaScript using Angular and Bootstrap",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "/projects/forum_flow"
    },
    {
        id : 3,
        title: "Talkify App",
        description: "A mobile application similar to the famous 'Messenger' " +
            "on which you can create an account using your phone number and it is verified using OTP. " +
            "The app generally allows you to write with each other in real time, send photos, " +
            "and have your own profile picture. The application is written in Kotlna in Android Studio " +
            "using Firebase from Google.",
        image: "/images/projects/3.jpg",
        tag: ["All","Mobile"],
        gitUrl: "",
        previewUrl: "/projects/talkify"
    },
    {
        id : 4,
        title: "Hawaii Snake",
        description: "A desktop application that allows you to play a 2D game " +
            "in which you move around with a snake and have to collect points by eating," +
            " but be careful not to eat yourself! The application was written in C++ using SFML library.",
        image: "/images/projects/4.jpg",
        tag: ["All", "Graphics"],
        gitUrl: "",
        previewUrl: "/projects/hawaii_snake"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1}
    }

    return (
        <section id="#projects">
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
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial" }
                            transition={{ duration: 0.3, delay: index * 0.4}}>
                            <ProjectCard
                                        key={project.id}
                                         title={project.title}
                                         description={project.description}
                                         imgUrl={project.image}
                                         gitUrl={project.gitUrl}
                                         previewUrl={project.previewUrl}
                                         tags={project}/>
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ProjectSection