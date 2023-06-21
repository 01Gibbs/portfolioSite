import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />

        <Link
          href="mailto:danielgilbert49@hotmail.co.uk"
          className="flex w-20 h-20 font-semibold rounded-full items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light hover:bg-light hover:dark:bg-dark text-light dark:text-dark hover:text-dark hover:dark:text-light shadow-md border border-solid border-dark dark:border-light md:w-12 md:h-12 md:text-[10px] md:absolute"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
