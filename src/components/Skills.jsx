import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-12vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Kanban" x="-24vw" y="-6vw" />
        <Skill name="JavaScript" x="15vw" y="2vw" />
        <Skill name="ReactJS" x="-6vw" y="11vw" />
        <Skill name="NodeJS" x="27vw" y="8vw" />
        <Skill name="React Native" x="10vw" y="15vw" />
        <Skill name="NextJS" x="-16vw" y="-15vw" />
        <Skill name="Figma" x="15vw" y="-12vw" />
        <Skill name="GraphQL" x="32vw" y="-5vw" />
        <Skill name="Express" x="-32vw" y="5vw" />
        <Skill name="Jest & Supertest" x="-20vw" y="7vw" />
        <Skill name="GatsbyJS" x="0vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="0vw" y="-20vw" />
        <Skill name="PostgreSQL" x="-25vw" y="18vw" />
        <Skill name="MongoDB" x="25vw" y="-18vw" />
        <Skill name="Web Design" x="25vw" y="18vw" />
        <Skill name="C#" x="-36vw" y="-14vw" />
        <Skill name="Python" x="0vw" y="24vw" />
      </div>
    </>
  );
};

export default Skills;
