"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectDescription = () => {
    return (
        <motion.div initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="container mt-24  mx-auto px-12 py-4">
            <h2 className="flex items-center px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16
                text-3xl md:text-6xl font-bold text-white ">Evolution <br/> Project</h2>
            <div className=" gap-8 items-center px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16">
                <Image
                    src="/images/projects/evolution/menu.png"
                    alt="about me photo"
                    width={1000}
                    height={800}
                    className="rounded-lg"
                />
                <br/>
                <Image
                    src="/images/projects/evolution/game.png"
                    alt="about me photo"
                    width={1000}
                    height={800}
                    className="rounded-lg"
                />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 border border-white inline-block p-2"> How the project works ?</h2>
            <div className="flex gap-8 items-center py-8 px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16">
                <video className="w-full h-auto items-center" controls>
                    <source src="/videos/evolution/extened_map.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-white mb-4 border border-white inline-block p-2">Introduction to the project</h2>
                <div className="text-white text-base md:text-xl">
                    <p>
                        This animal evolution simulation was written as part of a project for a credit in the course
                        Object Oriented Programming and was created in a team of two. The entire project was written in Java using the JavaFX library
                    </p>
                    <br/>
                    <p>
                        This simulation is dedicated to the evolution of animals defined by a mass of parameters.
                    </p>
                    <br/>
                    <p>
                        The first group of parameters is map properties, which describes the height, width and mode of our map:
                    </p>
                    <br/>

                    <li>Map width</li>
                    <li>Map height</li>
                    <li>Map mode Basic/Extended</li>

                    <br/>
                    <p>
                        The second group of enegry properties is responsible for all the energy we deal with on this map:

                    </p>
                    <br/>

                    <li>Grass energy profit</li>
                    <li>Start animal energy</li>
                    <li>Minimum energy for copulation</li>
                    <li>Copulation cost</li>

                    <br/>
                    <p>
                        The third group is spawning properties it is responsible for the starting elements on the map such as:
                    </p>
                    <br/>
                    <li>Start plants</li>
                    <li>New plants per day</li>
                    <li>Start animals</li>
                    <li>Mimum mutations change</li>
                    <li>Maximum mutations changes</li>
                    <li>Length genome</li>
                    <li>Mutation mode Basic/Extended</li>
                    <br/>

                    <p>
                        By Basic/Extended as map mode we mean a standard map and an extended map with so-called holes
                        through which animals pass to the other side of the hole.
                    </p>
                    <br/>
                    <p>
                        And by Basic/Extended as mutation mode we mean the different mutation a child gets at birth
                        for the standard one is replaced by as many genes as given in the parameters after their creation.
                        For extended, only the way our genes are read will change - i.e. movements will be from left to right instead
                        of left to right and right to left.
                    </p>
                    <br/>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 border border-white inline-block p-2">Questions and answers</h2>
                <div className="text-white text-base md:text-xl">
                    <p className="font-bold text-white mb-4" style={{textDecoration: 'underline'}}>
                        How do we create genes?
                    </p>

                    <p>
                        The animal born receives a genotype that is a cross between the genotypes of the parents.
                        The proportion of genes is proportional to the energy of the parents and determines where the genotype is divided.
                        For example, if one parent has 50 and the other 150 energy points,
                        the child will receive 25% of the genes of the first parent and 75% of the genes of the second parent.
                        We always draw the side from which we start
                        How does the extended
                    </p>
                    <br/>
                    <p className="font-bold text-white mb-4" style={{textDecoration: 'underline'}}>
                        When can animals reproduce?
                    </p>

                    <p>
                        When they have at least the minimum energy for compulation
                    </p>
                    <br/>
                    <p className="font-bold text-white mb-4" style={{textDecoration: 'underline'}}>
                        What does the map look like in general ?
                    </p>

                    <p>
                        The left and right edges of the map loop (if the pet goes beyond the left edge,
                        it appears on the right side - and if it goes beyond the right edge,
                        it appears on the left); the top and bottom edges of the map are poles
                        - you can not go there (if the pet tries to go beyond these edges of the map,
                        it remains on the field it was on, and its direction changes to the opposite)
                    </p>
                    <p>
                        In addition, for the extended map there are fields with holes,
                        each hole is part of an entrance-exit pair, entering one side of the hole you exit the other side of the hole
                    </p>
                    <br/>
                    <p className="font-bold text-white mb-4" style={{textDecoration: 'underline'}}>
                        What is the deal with the coloured squares ?
                    </p>

                    <p>
                        The thing about the coloured squares is that:
                    </p>
                    <br/>
                    <li>The circular figures represent animals with different levels of health,
                        going from a green healthy animal to a black sick animal that is dying</li>

                    <br/>

                    <li>The green squares represent grass that the animals can eat</li>

                    <br/>

                    <li>The round pink donats represent teleports/holes through which the animal can enter and leave on the other side</li>

                    <br/>

                    <li>White square simply means an empty field that the animal can enter</li>

                    <br/>

                </div>
            </div>
            <Link
                href="https://github.com/arturgesiarz/Evolution_Project" target="_blank"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Source code
              </span>
            </Link>
        </motion.div>
    )
};

export default ProjectDescription;