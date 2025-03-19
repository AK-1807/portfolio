import Image from "next/image";
import React from "react";

export default function FeaturedBlock() {
  return (
    <section class="featured-block py-[80px] bg-[#5869a5]" id="featured">
      <div class="container">
        <div class="md:flex flex-wrap mb-5 divide-x divide-white">
          <div class="w-full text-center w-full">
            <h3>Code Creations</h3>
            <p class="pt-3">
              Dive into a showcase of my skills through various projects.
            </p>
          </div>
        </div>
        <div class="mx-auto mt-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-md">
              <Image
                alt="Socure"
                loading="lazy"
                width="80"
                height="60"
                decoding="async"
                data-nimg="1"
                class="w-full h-30 object-contain rounded mb-8 border-solid border-b-2 border-gray-300"
                src="/project-icons/soc_logo.svg"
                style="color: transparent;"
              />
              <h4 class="text-xl font-semibold text-black mb-4">Socure</h4>
              <p class="text-gray-600">
                Technology Used: Html, Scss, Javascript, Wordpress,
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <Image
                alt="Digimarc"
                loading="lazy"
                width="80"
                height="60"
                decoding="async"
                data-nimg="1"
                class="w-full h-30 object-contain rounded mb-8 border-solid border-b-2 border-gray-300"
                src="/project-icons/Digimarc_Logo_Grey-1.svg"
              />
              <h4 class="text-xl font-semibold text-black mb-4">Digimarc</h4>
              <p class="text-gray-600">
                Technology Used: Html, Scss, Javascript, Drupal
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <Image
                alt="ClearDigital"
                loading="lazy"
                width="80"
                height="60"
                decoding="async"
                data-nimg="1"
                class="w-full h-30 object-contain rounded mb-8 bg-white border-solid border-b-2 border-gray-300"
                src="/project-icons/clear_logo.svg"
              />
              <h4 class="text-xl font-semibold text-black mb-4">
                ClearDigital
              </h4>
              <p class="text-gray-600">
                Technology Used: Html, Scss, Jquery/Javascript, Wordrpress,
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <Image
                alt="Estimatic"
                loading="lazy"
                width="80"
                height="60"
                decoding="async"
                data-nimg="1"
                class="w-full h-30 object-contain rounded mb-8 bg-white border-solid border-b-2 border-gray-300"
                src="/project-icons/Estimatic_Logo.svg"
              />
              <h4 class="text-xl font-semibold text-black mb-4">Estimatic</h4>
              <p class="text-gray-600">
                Technology Used: ReactJS, Redux
              </p>
            </div>
          </div>
          <div class="btn-wrap flex justify-center mt-12 w-full">
            <a
              class="bg-[#fff] text-[#5869a5] px-6 py-3 rounded-full hover:bg-black hover:text-white ml-4"
              href="/projects"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
