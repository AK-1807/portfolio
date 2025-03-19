import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="banner relative py-[100px] min-h-[600px] flex flex-wrap items-center">
      <div className="absolute inset-0 bg-black opacity-[.2] z-[1]"></div>
      <div className="absolute bottom-0 right-[200px] w-[300px] h-[500px">
         <Image src="/Anoop.png" alt="developer" width={300} height={500} />
        </div>
      <div className="container relative">
        
        <div className="flex flex-wrap col-6 z-10 relative">
          <h1 className="w-full text-white">HI, <br/> I'm <span className="text-[#66fcf1]">Anoop</span></h1>
          <h5 className="w-full text-white">Web Developer</h5>
        </div>
      </div>
    </section>
  );
}
