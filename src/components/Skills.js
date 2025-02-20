import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold m bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      viewport={{once: true}}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex justify-center items-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold m bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Skills
        </motion.div>
        <Skill name="Java" x="0" y="-7vw" />
        <Skill name="HTML" x="10vw" y="4vw" />
        <Skill name="CSS" x="-15vw" y="6vw" />
        <Skill name="SQL" x="12vw" y="-9vw" />
        <Skill name="Python" x="-22vw" y="-7vw" />
        <Skill name="JS" x="0vw" y="15vw" />
        <Skill name="Mern" x="-8vw" y="-18vw" />
        <Skill name="Fullstack" x="26vw" y="0" />
        <Skill name="R" x="25vw" y="-17vw" />
        <Skill name="Matlab" x="-28vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
