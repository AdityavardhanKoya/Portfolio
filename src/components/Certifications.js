import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";
import { LinkArrow } from "./Icons";

const Detail = ({ title, time, provider, link }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl">{title}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {provider}
        </span>
        <div className="flex items-center self-start mt-2">
          <Link
            href={link}
            target={"_blank"}
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
          >
            View <LinkArrow className={"w-6 m-1"} />
          </Link>
        </div>
      </motion.div>
    </li>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h1 className="font-bold text-6xl mb-32 w-full text-center">
        Certifications
      </h1>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-28 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-28">
          <Detail
            title="Mern Full Stack"
            time="August 2023 - November 2023"
            provider="Ethnus"
            link="https://drive.google.com/file/d/1hjJ-ajS6tOPhj0NUcZTqTa2F1-GvlNjU/view?usp=drive_link"
          />
          <Detail
            title="AWS Certified Cloud Practitioner"
            time="January 2024"
            provider="Amazon"
            link="https://drive.google.com/file/d/1vC6omOUpjC_z2oOayEcGtT7CyvUyO9KU/view?usp=drive_link"
          />
          <Detail
            title="App Development"
            time="December 2023"
            provider="Bharat Intern"
            link="https://drive.google.com/file/d/1RWccQuOENiPhraAaSu04GyOVH_leX0WN/view?usp=drive_link"
          />
          <Detail
            title="MatLab Onramp"
            time="December 2021"
            provider="MathWorks"
            link="https://drive.google.com/file/d/1U09a36TgKW5Bef3B4E7JbFJXLWy8rtHY/view?usp=drive_link"
          />
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
