import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 bg-[#00000050] py-4 shadow-md z-20">
      {/* <nav className="sticky top-0 bg-white py-4 shadow-md z-20"> */}
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link aria-label="homepage" href="/">
              <Image
                alt="site Logo"
                fetchPriority="high"
                width="150"
                height="85"
                decoding="async"
                data-nimg="1"
                className="mr-2"
                src="/AK.png"
                style="color: transparent;"
              />
            </Link>
            {/* <span className="text-white text-xl font-semibold">Your Logo</span> */}
          </div>
          <div className="md:hidden">
            <button className="block text-3xl text-black hover:text-blue-600 focus:outline-none">
              ☰
            </button>
          </div>
          <div className="md:flex items-center   hidden md:block visible">
            <ul className="flex space-x-4 border-t border-solid border-black sm:border-none">
              <li>
                <Link className="text-white hover:text-blue-600" href="/about">
                  About
                </Link>
              </li>
              <li className="text-black hover:text-blue-600 cursor-pointer">
               <Link className="text-white hover:text-blue-600" href="#skills">
                Skills
                </Link>
              </li>
              <li className="text-white hover:text-blue-600 cursor-pointer">
                Projects
              </li>
              <li>
                <Link className="text-white hover:text-blue-600" href="/academics">
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-black md:ml-4"
                  href="/contacts"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      {/* </nav> */}
    </header>
  );
}
