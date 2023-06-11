"use client";
import React from "react";
import Link from "next/link";
import { exThing } from "@/styles/fonts";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <nav className="fixed left-0 z-20 w-screen border-gray-200 bg-gray-900 p-0">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <span
            className={
              "bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-2xl text-transparent"
            }
            style={exThing.style}
          >
            MarketTicker
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <span className="ml-3 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            <Sun color={"orange"} />
          </span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={toggleTheme}
              checked={isDarkMode}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              <Moon color="white" />
            </span>
          </label>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-language-select"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0  md:bg-gray-900 md:p-0">
            <li>
              <Link
                href="/"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/crypto"
                className="block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Crypto
              </Link>
            </li>
            <li>
              <Link
                href="/stocks"
                className="block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:p-0  md:hover:bg-transparent md:hover:text-blue-500"
              >
                Stocks
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded border-gray-700 py-2 pl-3 pr-4 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
