import React from "react";
import GithubIcon from "/Users/arturgesiarz/WebstormProjects/portfolio-website/public/images/github-icon.svg"
import LinkedinIcon from "/Users/arturgesiarz/WebstormProjects/portfolio-website/public/images/linkedin_icon.svg"
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
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
                <form className="flex flex-col gap-4">
                <label htmlFor="email" className="text-white">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    placeholder="example@gmail.com"
                />
                </form>
            </div>
        </section>
    )
};

export default EmailSection