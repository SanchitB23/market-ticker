import React from "react";
import { Montserrat700 } from "@/styles/fonts";

function Jumbotron() {
  return (
    <section
      id={"hero"}
      className={"flex h-[80vh] flex-col justify-center gap-y-10"}
    >
      <div className={"flex flex-col items-center"} style={Montserrat700.style}>
        <h1
          className={
            "flex flex-col items-center justify-center text-7xl uppercase text-white"
          }
        >
          <span>Track and Trade</span>
          <span
            className={
              "bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
            }
          >
            Crypto and Stocks
          </span>
        </h1>
      </div>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:ring-blue-900"
        >
          Get started
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#about"
          className="inline-flex items-center justify-center rounded-lg border  border-gray-700 px-5 py-3 text-center text-base  font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 "
        >
          Learn more
        </a>
      </div>
    </section>
  );
}

export default Jumbotron;
