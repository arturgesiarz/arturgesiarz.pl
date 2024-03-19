"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HiSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12" id="#home">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="col-span-8 place-self-center place-items-center sm:text-left justify-self-start">
                    <h1 className="text-white max-w-2xl mb-4 lg:text-6xl md:text-5xl text-3xl font-extrabold">
                    <span className="text-transparent lg:text-6xl  md:text-5xl text-3xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Hello, I'm{" "}
                    </span>
                        <br/>
                        <span className="text-transparent lg:text-6xl md:text-5xl text-3xl bg-clip-text bg-gradient-to-r lg:leading-normal  from-primary-400 to-secondary-600">
                        Artur
                    </span>
                        <br/>
                        <motion.div initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    transition={{ duration: 0.5, delay: 2 }}>
                            <TypeAnimation
                                sequence={[
                                    "Java Lover",
                                    2000,
                                    "C++ Enjoyer",
                                    2000,
                                    "Kotlin App Maker",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.div>

                    </h1>
                    <motion.p initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 1.5}}
                              className="text-[#ADB7BE] mb-6 text-lg lg:text-2xl">
                        <i> Talk is cheap. Show me the code </i> <br/> ~ Linus Torvalds
                    </motion.p>
                    <div>
                        <Link href="CV.pdf" target="_blank" passHref>
                                <button className="px-8 py-5 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br
                                from-third-500 via-primary-500 to-secondary-500
                                hover:bg-slate-200 text-white text-lg">
                                Download CV
                                </button>
                        </Link>

                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="bg-[#181818] lg:w-[420px] lg:h-[420px] w-[250px] h-[250px] rounded-full relative">
                        <Image
                            src="/images/my_photo.png"
                            alt="my image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={400}
                            height={400}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HiSection;