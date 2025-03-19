import React from "react";

export default function About() {

    const startDate =  new Date('2021-08-15');
    const currentDate = new Date();

    const diffInMilliseconds = currentDate - startDate;
  const experience = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));


  return (
    <section className="py-[80px] about bg-white text-black" id="about">
      <div className="container md:flex items-center">
        <div className="sm:flex-none md:flex-1 md:flex-wrap col-6 place-content-center md:pr-4 md:max-w-[650px]">
          <h2 className="md:max-w-3xl text-4xl lg:text-5xl font-extrabold uppercase md:leading-tight">
            Crafting User Interfaces: My Expertise
          </h2>
        </div>
        <div className="flex md:flex-1 flex-wrap col-6 w-full justify-start pt-5 md:pt-0 lg:pl-4 md:max-w-[500px]">
          <p className="text-base md:text-lg">
            I am a web developer at{" "}
            <span className="text-[#5869a5]">
              <a href="https://cleardigital.com">Clear Digital</a>
            </span>
            , where I indulge in the art of web design, striving to deliver
            engaging and user-centric digital solutions.
          </p>
          <p className="flex items-center pt-5 uppercase font-medium">
            <span className="text-6xl font-bold pr-4 ">{experience} +</span>{" "}
            <span className="text-base">
              years <br /> of Digital Experience
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
