import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Detail = ({ degree, time, institute, info }) => {
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
        <h3 className="capitalize font-bold text-2xl">{degree}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {institute}
        </span>
        <p className="font-medium w-full">{info}</p>
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
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-28 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-28">
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
