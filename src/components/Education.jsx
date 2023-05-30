import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.75, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Northcoder's Software Engineering Bootcamp Coursework"
            time="Jan 2023 - May 2023"
            place="Leeds, UK"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis risus sit amet nulla mattis mollis. Sed lacus dolor, feugiat at est nec, imperdiet interdum sapien. Aliquam sit amet vehicula tortor. Sed in ultricies felis. Nunc sem ipsum, fermentum at accumsan in, malesuada at dui. Etiam porttitor justo tortor, non. "
          />
          <Details
            type="BSc. with Hons in Adult Nursing"
            time="Sept 2015 - July 2018"
            place="Birmingham City University, Birmingham, UK"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis risus sit amet nulla mattis mollis. Sed lacus dolor, feugiat at est nec, imperdiet interdum sapien. Aliquam sit amet vehicula tortor. Sed in ultricies felis. Nunc sem ipsum, fermentum at accumsan in, malesuada at dui. Etiam porttitor justo tortor, non. "
          />
          <Details
            type="Cert. of Higher Education in Audio and Recording Technology"
            time="Sept 2012 - Sept 2013"
            place="De Montfort University, Leicester, UK"
            info="Module of Web 3 Development Fundamentals in HTML and CSS. Integration of MaxMSP application development in creating multistep sequential music generator modulating sounds through 3D axial hand movements, (X, Y and Z axes), acceleration/ deceleration of Infra Red Wii Remote "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
