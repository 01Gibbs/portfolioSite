import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-primary capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
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
            position="Freelance"
            company="Independent"
            companyLink=""
            time="May 2023 - Present"
            address="Beverley, UK"
            work="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis risus sit amet nulla mattis mollis. Sed lacus dolor, feugiat at est nec, imperdiet interdum sapien. Aliquam sit amet vehicula tortor. Sed in ultricies felis. Nunc sem ipsum, fermentum at accumsan in, malesuada at dui. Etiam porttitor justo tortor, non. "
          />
          <Details
            position="Trainee Software Engineer"
            company="Northcoder's"
            companyLink="https://northcoders.com/"
            time="January 2023 - May 2023"
            address="Leeds, UK"
            work="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis risus sit amet nulla mattis mollis. Sed lacus dolor, feugiat at est nec, imperdiet interdum sapien. Aliquam sit amet vehicula tortor. Sed in ultricies felis. Nunc sem ipsum, fermentum at accumsan in, malesuada at dui. Etiam porttitor justo tortor, non. "
          />
          <Details
            position="Lorem Ipsum"
            company="Dolor Sit Amet"
            companyLink=""
            time="Consectetur"
            address="Adipiscing Elit."
            work="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis risus sit amet nulla mattis mollis. Sed lacus dolor, feugiat at est nec, imperdiet interdum sapien. Aliquam sit amet vehicula tortor. Sed in ultricies felis. Nunc sem ipsum, fermentum at accumsan in, malesuada at dui. Etiam porttitor justo tortor, non. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
