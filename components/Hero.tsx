"use client"

import React, { useEffect,useRef } from 'react'
import Image from "next/image"
import "./Styles.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';
import { useGSAP } from "@gsap/react";
import Herotextsvg from './Herotextsvg';
import SplitType from 'split-type';
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP); 
}

const Hero = () => {
  let heroText = useRef<HTMLElement | any>();
  let subtext = useRef<HTMLElement | any>();
  useGSAP(
    () => {
      gsap.from(heroText, { y: 200, opacity:0,delay:3.5 ,ease:"power4.inOut"});
      const myText = new SplitType(".hero-text2", {
        types: "lines,words,chars",
      });
      const chars = document.querySelectorAll(".hero-text2 .char");
      gsap.to(chars, {
        y:0,
        stagger: 0.05,
        delay: 3.5,
        duration: 0.2,
      });
      gsap.from(subtext.current, {
        x: -200,
        opacity: 0,
        delay: 4,
        ease: "power4.inOut",
      });
    },
    { scope: heroText }
  );
  return (
    <>
      <div id='Home' className="relative hero-text h-[90vh] mt-[10vh] w-[100%] overflow-hidden z-[1]">
        <h1 className="text-[4vh] mt-[2%] mx-[40%] w-[60%]">
          <span className="text-[#cab31dee] ">👋</span> , I am Roshan
        </h1>
        <h1
          ref={ heroText }
          className="relative hero-text text-[25vh] w-[90%] mx-[22%] font-black leading-none"
        >
          Full Stack
        </h1>
        <h1
          className="hero-text2 text-[25vh] w-[90%] mx-[9%] font-black text-stroke text-transparent"
          id="hero-text2"
        >
          Web Developer
        </h1>
        <h1
          ref={subtext}
          className="text-[4vh] text-[#243720] w-[20%] ml-[10%] mt-[-3%] "
        >
          Based in Delhi,India{" "}
        </h1>
        {/* <div className="absolute h-[70vh] w-[24%] bottom-0 left-[80vh]">
          <Image fill priority src="/images/heroimg.png" alt="hero image" />
        </div> */}
        <div className="rounded-lg w-[18vh] h-[5vh] bg-black relative left-[180vh] top-[10vh] ">
          <h1 className=" text-white py-[1vh] px-[2.7vh] text-[2.3vh]">
            Contact Me
          </h1>
        </div>
        <div className="h-[0.2vh] bg-black w-[90%] left-[5%] absolute bottom-0"></div>
      </div>
    </>
  );
}

export default Hero
 