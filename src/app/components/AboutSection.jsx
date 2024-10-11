"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import GithubIcon from "/public/images/github-icon.svg";
import LinkedinIcon from "/public/images/linkedin_icon.svg";

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="text-white w-full "
      id="#about"
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5">
        About me
      </h2>
      <div className="grid gap-8 items-center px-4 xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-16">
        <div className="md:order-2 mt-4 md:mt-0 text-left flex flex-col h-full bg-stone-900 p-10 rounded-lg">
          <p className="text-white text-base md:text-lg">
            Hi, my name is Artur Gęsiarz 🙋‍
            <br />
            <br />I am <strong>a third year</strong> student of{" "}
            <strong>computer science</strong> at <strong>AGH</strong> University
            of Krakow at WI. 💻 🤓
            <br />
            <br />I have gained valuable commercial experience in various
            technologies, including{" "}
            <strong>Angular, ASP.NET, Docker and MSSQL. 🐳</strong>
            <br />
            <br />
            My expertise lies in building{" "}
            <strong>full-stack web applications</strong>, which has provided me
            with a strong understanding of both <strong>frontend</strong> and{" "}
            <strong>backend</strong> development. 🧑‍💻
            <br />
            <br />
            My technical skills, coupled with a commitment to delivering
            <strong> high-quality solutions</strong> 🖊️
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 md:order-1">
          <Image
            src="/images/my_photo_2.png"
            alt="about me photo"
            width={500}
            height={500}
            className="rounded-full"
          />

          <div className="socials flex justify-center gap-2">
            <Link href="https://github.com/arturgesiarz">
              <Image
                src={GithubIcon}
                alt="Github Icon"
                height={70}
                width={70}
              />
            </Link>
            <Link href="https://linkedin.com/in/artur-gesiarz">
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                height={70}
                width={70}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
