import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, InstagramIcon, GmailIcon , LeetcodeIcon, FigmaIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute w-0 left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-6 md:px-32 py-4 md:py-8 font-medium flex flex-wrap md:items-center justify-between">
      <nav className="mb-4 md:mb-0">
        <CustomLink href="/" title="Home" className="mr-4 " />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>
      <div className="w-full md:w-auto md:mb-0 flex justify-center items-center">
        <Logo />
      </div>
      <nav className="flex justify-center items-center flex-wrap md:justify-end">
        <motion.a
        href = "mailto:adityavardhan.koya@gmail.com"
        target={"_blank"}
        whileHover={{ y: -2}}
        whileTap={{ scale: 0.9}}
        className="w-6 mr-3"
        >
          <GmailIcon />
        </motion.a>
        <motion.a
          href="https://github.com/AdityavardhanKoya"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        {/* <motion.a
          href="https://leetcode.com/anantdubey/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <LeetcodeIcon />
        </motion.a> */}
        <motion.a
          href="https://www.linkedin.com/in/adityavardhankoya/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/adityavardhankoya/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <InstagramIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com/AdityaVardhannn"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        {/* <motion.a
          href="https://figma.com/@anantdubey"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <FigmaIcon />
        </motion.a> */}
      </nav>
    </header>
  );
};

export default NavBar;
