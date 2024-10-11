"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "/public/images/github-icon.svg";
import LinkedinIcon from "/public/images/linkedin_icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 200 },
    animate: { y: 0 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }

    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.email.value = "";
    e.target.subject.value = "";
    e.target.message.value = "";
  };

  return (
    <div
      id="#contact"
      className="grid md:grid-cols-2 my-12 mb-0 pb-0 md:my-12 py-24 gap-4 relative"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          If you have questions, suggestions or just want to chat, that is
          great! There is a form on the right where you can write me a message
          :)
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/arturgesiarz">
            <Image src={GithubIcon} alt="Github Icon" height={70} width={70} />
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
      <div>
        <form className="grid grid-cols-2 gap-10" onSubmit={handleSubmit}>
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              First name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Jan"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="surname"
              className="text-white block mb-2 text-sm font-medium"
            >
              Last name
            </label>
            <input
              name="surname"
              type="text"
              id="surname"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Kowlaski"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jan-kowalski@example.com"
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hello!"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="text-white text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                                    text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white
                    font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
