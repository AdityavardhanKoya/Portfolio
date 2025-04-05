import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-normal">
      <Layout className="py-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0 text-center sm:text-left">
        {/* Year */}
        <span className="whitespace-nowrap">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>

        {/* Built with heart */}
        <div className="flex items-center whitespace-nowrap">
          Built with <span className="text-red-600 text-2xl px-1">&hearts;</span> by&nbsp;Aditya Vardhan
        </div>

        {/* Contact link */}
        <Link
          href="https://www.linkedin.com/in/adityavardhankoya/"
          className="underline underline-offset-2 whitespace-nowrap"
        >
          Say Hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
