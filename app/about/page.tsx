"use client"

import SNavbar from '@/components/SNavbar';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import React, { useRef } from 'react'
import { FaArrowTurnDown } from "react-icons/fa6";


const page = () => {
  let HFtext = useRef<HTMLElement | any>();
  let Htext = useRef<HTMLElement | any>();
  let HHtext = useRef<HTMLElement | any>();
  let HLtext = useRef<HTMLElement | any>();
  let HAtext = useRef<HTMLElement | any>();
  useGSAP(() => {
    gsap.from(HLtext.current, {
      scale: 1,
      opacity: 0,
      duration: 4,
      ease: "power4.inOut",
    });gsap.from(HAtext.current, {
      scale: 1,
      opacity: 0,
      duration: 4,
      ease: "power4.inOut",
    });gsap.from(HHtext.current, {
      scale: 1,
      opacity: 0,
      duration: 4,
      ease: "power4.inOut",
    });
    gsap.from(Htext.current, {
      scale: 1,
      opacity: 0,
      duration: 6,
      ease: "power4.inOut",
    });
    gsap.from(HFtext.current, {
      scale: 1,
      opacity: 0,
      duration: 8,
      ease: "power4.inOut",
    });
  });

  return (
    <div className="w-full h-screen bg-black mt-10">
      <SNavbar />
      <div className="flex gap-[1%] pt-[2%] pl-[5%] pb-[1%]">
        <div
          ref={HAtext}
          className="aboutIcon invert ml-[2%] mt-[2.3%] sm:mt-[1.8%] opacity-1 text-[2.7vh] sm:text-[3.3vw]"
        >
          <FaArrowTurnDown />
        </div>
        <h1
          ref={HHtext}
          className="heading absolute text-[6vw] left-[12%] sm:text-[5vw] text-white"
        >
          About
        </h1>
      </div>
      <div
        ref={HLtext}
        className="h-[0.1vh] mt-[2%] md:mt-[1%] bg-white w-[90%] mx-auto opacity-1"
      ></div>
      <div className="relative text-white ml-10 sm:ml-20 ">
        <div
          ref={Htext}
          className="relative w-[90%] lg:w-[50%] text-[4vw] sm:text-[3vw] md:text-[2.2vw] xl:text-[1.8vw] mt-4"
        >
          <p className="opacity-1">
            Hey there! I'm Roshan, your dedicated Full Stack Developer, blending
            the art of coding with a fervor for fitness and the precision of
            culinary craftsmanship. Join me on a unique journey where technology
            seamlessly intertwines with well-being.
          </p>
        </div>
        <div
          ref={HFtext}
          className="relative w-[90%] lg:w-[50%] text-[4vw] sm:text-[3vw] md:text-[2.2vw] xl:text-[1.8vw] mt-4"
        >
          <p className="opacity-1">
            When you collaborate with me, you're not just getting a developer;
            you're gaining a partner who understands the importance of holistic
            success. From building robust web applications to promoting
            well-being through technology, I'm here to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page
