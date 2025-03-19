import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <section class="technical_skill py-[80px] bg-white text-black" id="skills">
      <div class="container">
        <div class="w-full max-w-5xl mx-auto text-center mb-12">
          <h3 class="mb-3 font-bold">Skills And Expertise</h3>
          <p class="">
            What truly excites me about my work is the opportunity to utilize
            fantastic tools and resources on a daily basis.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
             className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/html5.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/css3.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/sass.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/js.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/next.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/bootstrap.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/tailwindcss-icon.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/drupal.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/wordpress.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/git.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/contentful.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
          <div class="border border-gray-300 p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image
            className="object-contain"
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/skill-icons/shopify.svg"
              style="color: transparent; object-fit: contain;"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
