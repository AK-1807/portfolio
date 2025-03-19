import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-[80px] pb-[20px]">
      <div className="container mx-auto flex flex-wrap justify-between gap-4">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
          <div className="flex items-center">
            <Image
             className="object-contain object-right"
              alt="logo"
              loading="lazy"
              width="140"
              height="120"
              decoding="async"
              data-nimg="1"
              src="/AK.png"
            />
          </div>
          <p className="mt-2 text-sm">
            Need a website? I am a web designer and developer that can help
            bring your ideas into a reality.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul>
            <li>
              <Link className="text-[#fff] hover:text-[#5869a5]" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-[#fff] hover:text-[#5869a5]" href="/#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="text-[#fff] hover:text-[#5869a5]" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="text-[#fff] hover:text-[#5869a5]" href="/contacts">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h5 className="text-lg font-semibold mb-2">Resources</h5>
          <ul className="text-[#fff]">
            <li>
              <Link className="text-[#fff] hover:text-[#5869a5]" href="/comingsoon">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-[#fff] hover:text-[#5869a5]" href="/comingsoon">
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-20 w-full">
          <div className="copyright flex my-5">
            <span className="inline-block text-sm">Copyright © 2025 All Rights Reserved.</span>
          </div>
          <div className="social links flex flex-wrap m-5">
            
            <Link
              className="text-2xl mx-4"
              href="https://www.linkedin.com/in/anoopkumar-aligarh/"
            >
              <Image
                alt="linkdin"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                src="/linkdin.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
