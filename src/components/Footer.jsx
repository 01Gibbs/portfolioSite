import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid dark:text-light border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built by Daniel Gilbert. Modified Starter Code from &nbsp;
          <Link
            href="https://devdreaming.com"
            target="_blank"
            className="underline underline-offset-2"
          >
            CodeBucks
          </Link>
        </div>
        <Link href="/">Say Hello!</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
