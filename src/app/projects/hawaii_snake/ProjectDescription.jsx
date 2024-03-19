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
                text-3xl md:text-6xl font-bold text-white ">Hawaii Snake <br/> Project</h2>
            <div className=" gap-8 items-center px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16">
                <Image
                    src="/images/projects/hawaii_snake/menu.png"
                    alt="about me photo"
                    width={1000}
                    height={800}
                    className="rounded-lg"
                />
                <br/>
                <Image
                    src="/images/projects/hawaii_snake/gameplay.png"
                    alt="about me photo"
                    width={1000}
                    height={800}
                    className="rounded-lg"
                />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 border border-white inline-block p-2"> How the project works ?</h2>
            <div className="flex gap-8 items-center py-8 px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16">
                <video className="w-full h-auto items-center" controls>
                    <source src="/videos/hawaii_snake/gameplay.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-white mb-4 border border-white inline-block p-2">Introduction to the project</h2>
                <div className="text-white text-base md:text-xl">
                    <p>
                        This desktop game is similar to the top Snake game, in which
                        we move with arrows and collect fruits just like in this one.
                        The game is written entirely in C++ using the SFML library.</p>
                    <br/>
                    <p>
                        The game welcomes you with a welcome screen in which you have to press the START
                        button to proceed, then the game starts.
                    </p>
                    <br/>
                    <p>
                        During the game we eat fruit to collect as many points as possible.
                        There is a special sound when we eat fruit (as well as when we fail).
                    </p>
                    <br/>

                    <p>
                        The counter of the eaten fruit is located at the top.
                    </p>
                    <br/>
                    <p>
                        When you lose, your score is displayed and you have the option to play again or to quit the game.
                    </p>
                    <br/>
                </div>
            </div>
            <Link
                href="https://github.com/arturgesiarz/Snake_Hawaii" target="_blank"
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