import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />

        <Link
          href="mailto:danielgilbert49@hotmail.co.uk"
          className="flex w-20 h-20 font-semibold rounded-full items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark hover:bg-light text-light hover:text-dark shadow-md border border-solid border-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
