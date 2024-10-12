"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";

const SAbout = () => {
  let spinner = useRef<HTMLElement | any>();
  let about = useRef<HTMLElement | any>();
  let AboutLine = useRef<HTMLElement | any>();
  let aboutText = useRef<HTMLElement | any>();
  let aboutText1 = useRef<HTMLElement | any>();
  let aboutText2 = useRef<HTMLElement | any>();
  let aboutIcon = useRef<HTMLElement | any>();
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: about.current,
        start: "43% 50%",
        end: "120% 50%",
        // markers:true,
        pin: true,
        scrub: 2,
      },
    });
    t1.from(
      aboutText.current,
      {
        top: "40%",
        left:"40%",
        scale: 5,
      },
      "a"
    );
    t1.to(
      aboutIcon.current,
      {
        opacity: 1,
      },
      "a"
    );
    t1.from(
      AboutLine.current,
      {
        opacity: 0,
      },
      "a"
    );
    t1.from(
      aboutText1.current,
      {
        top:"-2%",
      },
      "a"
    );
    t1.from(
      aboutText2.current,
      {
        top: "12%",
      },
      "a"
    );
    const SplitTypes = document.querySelectorAll(".reveal-types");
    SplitTypes.forEach((char: any, i) => {
      const text = new SplitType(char, { types: "chars" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 50%",
          end: "top 10%",
          scrub: true,
          // markers:true,
        },
        opacity: 0.2,
        stagger: 0.1,
      })
    });
  });
  return (
    <div
      ref={about}
      className="h-[100vh] w-[100vw] bg-black relative overflow-hidden md:hidden"
    >
      <div className="flex gap-[1%] pt-[2%] pl-[5%] pb-[1%]">
        <div
          ref={aboutIcon}
          className="aboutIcon invert ml-[2%] mt-[2.3%] sm:mt-[1.8%] opacity-0 text-[2.7vh] sm:text-[3.3vw]"
        >
          <FaArrowTurnDown />
        </div>
        <h1
          ref={aboutText}
          className="heading absolute text-[6vw] left-[12%] sm:text-[5vw] text-white"
        >
          About
        </h1>
      </div>
      <div
        ref={AboutLine}
        className="h-[0.1vh] mt-[2%] md:mt-[1%] bg-white w-[90%] mx-auto opacity-1"
      ></div>
      <div
        ref={aboutText1}
        className="absolute w-[90%] pl-[10%] text-[1.8vh] sm:text-[2.5vw] text-center text-white top-[-15%] opacity-0.2"
      >
        <p className="reveal-types">
          Hey there! I'm Roshan, your dedicated Full Stack Developer, blending
          the art of coding with a fervor for fitness and the precision of
          culinary craftsmanship. Join me on a unique journey where technology
          seamlessly intertwines with well-being.
        </p>
      </div>
      <div
        ref={aboutText2}
        className="absolute w-[90%] pl-[10%] text-[1.8vh] sm:text-[2.5vw]  text-center text-white top-0 sm:top-[5%] opacity-0.2"
      >
        <p className="reveal-types">
          When you collaborate with me, you're not just getting a developer;
          you're gaining a partner who understands the importance of holistic
          success. From building robust web applications to promoting well-being
          through technology, I'm here to make a positive impact.
        </p>
      </div>
    </div>
  );
};

export default SAbout;
