"use client";
import React, {useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const ProjectNavbar = ({ name }) => {
    const ref = useRef(null)


    return (
        <nav ref={ref} className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-1">
                <motion.div initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}>
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
                </motion.div>
                <motion.div initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-3xl rounded md:bg-transparent  md:p-0">
                    {name}
                </motion.div>
            </div>


        </nav>
    );
};

export default ProjectNavbar;