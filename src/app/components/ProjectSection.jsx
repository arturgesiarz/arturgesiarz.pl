"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 3,
    title: "Medical Clinic",
    description:
      "The web application concerned a medical system that allowed adding patients " +
      "signing them up for appointments, displaying detailed information about them, " +
      "changing appointments, and patient information. Backend was written in Java using Spring and MySQL database." +
      "Frontend was written in Angular with TypeScript.",
    image: "/images/projects/medical_clinic/icon.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arturgesiarz/Medical_Clinic_Frontend",
    previewUrl: "",
  },
  {
    id: 5,
    title: "To-Do",
    description:
      "The web application allows you to add things to do, edit them, delete them, " +
      "and assign a date to a specific task. Backend was written in C# using ASP.NET. The whole apllication is in Docker containers." +
      "Frontend was written in React",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Body Builder",
    description:
      "An application that allows you to record your gym progress from given exercises." +
      "The whole application was written in React Native",
    image: "/images/projects/2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Forum Flow",
    description:
      "The web application project was about making a Facebook-like website " +
      "where you can create an account, insert a post, react to it, give a comment. " +
      "The backend of the project is written in C# using ASP.NET " +
      " and MSSQL database. Frontend is written in TypeScript using Angular.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 1,
    title: "Evolution",
    description:
      "The project concerned the simulation of animal evolution through reproduction, " +
      "struggle for food and death. The project was made in Java with the JavaFX library",
    image: "/images/projects/evolution/icon.png",
    tag: ["All", "Graphics"],
    gitUrl: "https://github.com/arturgesiarz/Evolution_Project",
    previewUrl: "/projects/evolution",
  },
  {
    id: 2,
    title: "Hawaii Snake",
    description:
      "A desktop application that allows you to play a 2D game " +
      "in which you move around with a snake and have to collect points by eating," +
      " but be careful not to eat yourself! The application was written in C++ using SFML library.",
    image: "/images/projects/hawaii_snake/icon.png",
    tag: ["All", "Graphics"],
    gitUrl: "https://github.com/arturgesiarz/Snake_Hawaii",
    previewUrl: "/projects/hawaii_snake",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My projects
      </h2>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 py-3">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
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
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
