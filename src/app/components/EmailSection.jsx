"use client"
import React from "react";
import GithubIcon from "/public/images/github-icon.svg"
import LinkedinIcon from "/public/images/linkedin_icon.svg"
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = "/api/send"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }
        const response = await fetch(endpoint, options)
        if (response.status === 200) {
            console.log('Message sent.')
        }

        e.target.name.value = ""
        e.target.surname.value = ""
        e.target.email.value = ""
        e.target.subject.value = ""
        e.target.message.value = ""
    }

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
            from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4
            transform -translate-x-1/2 -translate-1/2">
            </div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    The DNS records verification is in progress.
                    It may take a few minutes or hours, depending on domain propagation time.
                    You will receive an email notification once this operation is completed.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com">
                        <Image src={GithubIcon} alt="Github Icon" height={70} width={70}/>
                    </Link>
                    <Link href="https://linkedin.com">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" height={70} width={70}/>
                    </Link>

                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                            First name
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Jan"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="surname" className="text-white block mb-2 text-sm font-medium">
                            Last name
                        </label>
                        <input
                            name="surname"
                            type="text"
                            id="surname"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Kowlaski"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                            text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jan-kowalski@example.com"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
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
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white text-sm mb-2 font-medium">
                            Message
                        </label>
                        <textarea name="message"
                                  id="message"
                                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                                    text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                  placeholder="Let's talk about..."/>
                    </div>
                    <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white
                    font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
};

export default EmailSection