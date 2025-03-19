import Image from "next/image";
import React from "react";

export default function DevProcess() {
  return (
    <section className="dev_process py-[80px]">
      <div className="container">
        <div className="w-full text-center justify-center flex flex-wrap mb-12">
          <h3 className="max-w-5xl font-bold">
            I bring user interfaces to life through a balanced fusion of design
            craftsmanship and technical implementation.
          </h3>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4">
            <div className="w-full max-w-[100px] mx-auto">
            <Image
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/design.svg"
            />
            </div>
            
            <h5 className="w-full pt-6 pb-3 font-bold">Design</h5>
            <p className="text-sm">
              At this point, our primary focus is to articulate the message you
              wish to convey. We'll now move on to defining the visual style of
              your website.
            </p>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4">
          <div className="w-full max-w-[100px] mx-auto">
            <Image
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/development.svg"
            />
          </div>
            
            <h5 className="w-full pt-6 pb-3 font-bold">Development</h5>
            <p className="text-sm">
              This marks a pivotal phase in the development process, where the
              design from the previous stage transforms into a fully functional
              website that seamlessly operates on various browsers and devices.
            </p>
          </div>
          <div className="w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4">
          <div className="w-full max-w-[100px] mx-auto"><Image
              alt="person"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/qa.svg"
            /></div>
          
            <h5 className="w-full pt-6 pb-3 font-bold">Quality Assurance</h5>
            <p className="text-sm">
              This phase is dedicated to conducting essential tests, such as
              assessing website speed and ensuring cross-browser compatibility,
              to ensure your website is fully prepared for its launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
