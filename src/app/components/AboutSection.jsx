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
                <li>AGH University of Krakow, WI - <br/>
                    Computer Science (2022 - now) 📖</li>
            </ul>
        )
    },
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc pl-2">
                <li>Polish (native) 🇵🇱</li>
                <li>English (B2) 🇬🇧</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("education");
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
                <div className="md:order-2 mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-white text-base md:text-lg">
                        Hi, my name is Artur Gęsiarz 🙋‍
                        <br/>
                        <br/>
                        I am a second year student of computer science at AGH University of Krakow at WI. 💻 🤓
                        <br/>
                        <br/>
                        I am a finalist of the UJ mathematics competition Jagiellonian
                        Mathematics Tournament in 2021/22. ✒️
                        <br/>
                        <br/>
                        I am an enthusiast of chess, gym and good food. 🏋️‍♀️
                        <br/>
                        <br/>
                        If you would like to know a bit more about me then, to put it a little
                        less formally, my life used to revolve around trying to understand
                        how all this computer magic works, but now I am ready to take my skills to the next level - and it is starting to happen! 🚀
                        <br/>
                        <br/>
                        I am looking for an internship or job as a programmer who will produce code better than my average chess game in Java, C++ or Kotlin domains. But do not worry, my programming projects are definitely better than my chess ranking!  🏆
                        <br/>
                        <br/>
                        Apart from coding, I love spending time outdoors. When I am not trying to find a bug in my code, you can find me on my bike, trying not to run into any trees or swimming, trying not to lose to a fish in the pool. 🚴‍♂️🏊‍♂️


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
                        <TabButton selectTab={() => handleTabChange("languages")}
                                   active={tab === "languages"}>
                            {" "}
                            Languages{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
                <div className="md:order-1">
                    <Image
                        src="/images/my_photo_about_me.jpg"
                        alt="about me photo"
                        width={500}
                        height={800}
                        className="rounded-lg"/>
                </div>
            </div>
        </motion.section>
    )
};

export default AboutSection;