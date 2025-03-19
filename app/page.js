import About from "@/components/About";
import Banner from "@/components/Banner";
import DevProcess from "@/components/DevProcess";
import FeaturedBlock from "@/components/FeaturedBlock";
import Skills from "@/components/Skills";
import Image from "next/image";


export default function Home() {
  return (
    <>
       <Banner />
       <About />
       <DevProcess />
       <Skills />
       <FeaturedBlock />
    </>
    
  );
}
