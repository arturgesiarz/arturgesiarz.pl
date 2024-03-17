"use client";
import React, {useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useMediaQuery } from 'react-responsive';


const ProjectNavbar = ({ name }) => {
    const ref = useRef(null)
    const isMediumScreen = useMediaQuery({ query: '(min-width: 641px)' });
    const handleClick = () => {
        if (isMediumScreen) {
            scroll.scrollTo(1235);
        } else {
            scroll.scrollTo(1650);
        }

    };

    return (
        <nav ref={ref} className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-1">
                <div>
                    <Link
                        href="/"
                        className="text-2xl md:text-5xl text-white font-semibold">
                        <Image
                            src="/images/logo.png"
                            alt="my image"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                <motion.div initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="flex items-center px-3 py-2
                                rounded text-slate-200 border-slate-200">
                        <Link href="/">
                            <button className="md:px-10" onClick={handleClick}>
                                <ArrowUturnLeftIcon className="size-6 md:size-10 text-[#ADB7BE] sm:text-3xl hover:text-white hover:border-white"/>
                            </button>
                        </Link>

                    <motion.div initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.5 }}
                                className="block py-2 pl-3 pr-4 text-[#ADB7BE] md:text-3xl rounded md:bg-transparent  md:p-0">
                        {name}
                    </motion.div>

                </motion.div>

            </div>
        </nav>
    );
};

export default ProjectNavbar;