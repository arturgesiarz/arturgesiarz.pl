"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>C++</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Kotlin</li>
                <li>Android Studio</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>AGH University of Krakow - Computer Science (present)</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Empty :(</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <motion.section initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-white"
                        id="#about">
            <div className="grid gap-8 items-center py-8 px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16">
                <Image
                    src="/images/my_photo_about_me.jpg"
                    alt="about me photo"
                    width={500}
                    height={500}
                    className="rounded-lg"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-white text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec iaculis est a aliquam imperdiet.
                        Nulla dignissim odio ipsum, id sodales erat ornare eget.
                        Ut pellentesque nulla magna, eget fermentum lectus aliquet facilisis.
                        Duis fermentum, arcu in sagittis iaculis, mi risus tempor risus, ut rutrum justo nisi id leo.
                        Ut pellentesque nulla magna, eget fermentum lectus aliquet facilisis.
                        Duis fermentum, arcu in sagittis iaculis, mi risus tempor risus, ut rutrum justo nisi id leo.

                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")}
                                   active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")}
                                   active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")}
                                   active={tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default AboutSection;