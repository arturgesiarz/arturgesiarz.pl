"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectDescription = () => {
    return (
        <motion.div initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="container mt-24  mx-auto px-12 py-4">
            <h2 className="flex items-center px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16
                text-3xl md:text-6xl font-bold text-white ">Coming <br/> Soon !</h2>

        </motion.div>
    )
};

export default ProjectDescription;