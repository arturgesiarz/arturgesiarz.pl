"use client";
import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <nav
      ref={ref}
      className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-1">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Link
            activeClass="active"
            to="#home"
            spy={true}
            smooth={true}
            offset={-125} // opcjonalne przesunięcie, jeśli masz stałą nawigację górną
            duration={500}
            className="text-2xl md:text-5xl text-white font-semibold"
          >
            <Image
              src="/images/logo.png"
              alt="my image"
              width={100}
              height={100}
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="block md:hidden"
        >
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200
                                hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200
                                hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </motion.div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0  rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => {
              return (
                <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 1, delay: index * 0.5 }}
                >
                  <NavLink
                    key={link.title}
                    title={link.title}
                    href={link.path}
                    navbarOpen={false}
                    setNavbarOpen={null}
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
