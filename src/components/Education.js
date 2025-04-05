import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Detail = ({ degree, time, institute, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-full md:w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-xl md:text-2xl">{degree}</h3>
        <span className="capitalize font-medium text-dark/75 text-sm md:text-base">
          {time} | {institute}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-16">
      <h2 className="font-bold text-4xl md:text-6xl mb-16 md:mb-32 w-full text-center">
        Education
      </h2>
      <div ref={ref} className="w-full md:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-4 md:left-28 top-0 w-[2px] md:w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-8 md:ml-28">
          <Detail
            degree="Bachelor of Technology"
            time="2021-2025"
            institute="Vellore Institute of Technology, Amaravti"
            info="B.Tech in Computer Science and Engineering"
          />
          <Detail
            degree="Class XII"
            time="2019-2021"
            institute="Sri Chaitanya Jr.College"
            info="90.8%"
          />
          <Detail
            degree="Class X"
            time="2019"
            institute="Dr.KKR Gowtham Concept School"
            info="9.7 GPA"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;