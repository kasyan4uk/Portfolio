import React from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I`m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I`ll try my best
          to get back to you!
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="https://github.com/kasyan4uk" target="blank">
            <Image src={GitHubIcon} alt="GitHub icon"></Image>
          </Link>
          <Link
            href="https://www.linkedin.com/in/serhii-kasianchuk/"
            target="blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin icon"></Image>
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="subject..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="massage"
              className="text-white block text-sm mb-2 font-medium"
            >
              Massage
            </label>
            <textarea
              name="massage"
              id="massage"
              placeholder="Lat`s talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Massage
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
