import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark fornt-medium text-lg ">
      <Layout className="py-8 flex flex-col sm:flex-row items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center my-4 sm:my-0">
          Built with{" "}
          <span className="text-red-600 text-2xl px-1">&hearts;</span> by&nbsp;Aditya Vardhan
        </div>
        <Link href='https://www.linkedin.com/in/adityavardhankoya/' className="underline underline-offset-2">Say Hello!</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
