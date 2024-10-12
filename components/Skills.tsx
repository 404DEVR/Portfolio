"use client";

import { timeline } from "animejs";
import React, { useEffect, useRef } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SkillCard from "./SkillCard";
import { SiTailwindcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiGreensock } from "react-icons/si";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  let skill = useRef<HTMLElement | any>();
  let cardOne = useRef<HTMLElement | any>();
  let cardTwo = useRef<HTMLElement | any>();
  let cardThree = useRef<HTMLElement | any>();
  let cardFour = useRef<HTMLElement | any>();
  let cardFive = useRef<HTMLElement | any>();
  let card = useRef<HTMLElement | any>();
  let skilltext = useRef<HTMLElement | any>();
  let skillLine = useRef<HTMLElement | any>();
  let LskillT = useRef<HTMLElement | any>();
  let skillIcon = useRef<HTMLElement | any>();
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: skill.current,
        start: "0% 80%",
        end: "40% 80%",
        // markers: true,
        scrub: 2,
      },
    });
    t1.from(
      skilltext.current,
      {
        top: "10%",
        left: "40%",
        scale: 3,
      },
      "a"
    );
    t1.to(
      skillLine.current,
      {
        opacity: 1,
      },
      "a"
    );
    t1.to(
      skillIcon.current,
      {
        opacity: 1,
      },
      "a"
    );
    const cards1 = document.querySelectorAll("#skillcard1");
    const cards2 = document.querySelectorAll("#skillcard2");
    const cards3 = document.querySelectorAll("#skillcard3");
    const cards4 = document.querySelectorAll("#skillcard4");
    const cards5 = document.querySelectorAll("#skillcard5");

    t1.to(
      cards1,
      {
        top: "0%",
        left: "0%",
        stagger: 0.05,
        duration: 0.2,
        opacity: 1,
      },
      "b"
    );
    t1.to(
      cards2,
      {
        top: "0%",
        left: "0%",
        stagger: 0.05,
        duration: 0.2,
        opacity: 1,
      },
      "c"
    );
    t1.to(
      cards3,
      {
        top: "0%",
        left: "0%",
        stagger: 0.05,
        duration: 0.2,
        opacity: 1,
      },
      "d"
    );
    t1.to(
      cards4,
      {
        top: "0%",
        left: "0%",
        stagger: 0.05,
        duration: 0.2,
        opacity: 1,
      },
      "e"
    );
    t1.to(
      cards5,
      {
        top: "0%",
        left: "0%",
        stagger: 0.05,
        duration: 0.2,
        opacity: 1,
      },
      "f"
    );
  });
  return (
    <>
      <div
        id="Skills"
        ref={skill}
        className="relative skill h-full pt-[7vh] w-[100%] z-[1] bg-black xl:block 2xl:block rounded-t-[4vw]"
      >
        <div className="h-full w-full object-contain absolute bottom-[0%]">
          <Image
            src="/images/Ellipse 2.png"
            alt="public/images/Ellipse 2.png"
            fill
            priority
          />
        </div>
        <div className="flex gap-[1%] pt-[2%] pl-[5%] pb-[1%] z-20">
          <div
            ref={skillIcon}
            className="skillIcon invert ml-[2%] mt-[2.3%] sm:mt-[1.8%] opacity-0 text-[2.7vh] sm:text-[3.3vw] "
          >
            <FaArrowTurnDown />
          </div>
          <h1
            ref={skilltext}
            className="heading absolute text-[6vw] left-[12%] sm:text-[5vw] text-white"
          >
            Skills
          </h1>
        </div>
        <div
          ref={skillLine}
          className="relative z-20 h-[0.1vh] mt-[2%] md:mt-[1%]  w-[90%] mx-auto opacity-0 bg-white"
        ></div>
        <div ref={card} className=" py-[7%] pl-[5%] h-[20%] w-[95%] z-20">
          <div
            ref={cardOne}
            className="flex relative justify-center items-center gap-[4%] mb-[2%] h-[15vh] w-[100%] "
          >
            <SkillCard
              id="skillcard1"
              cl="top-[250%] left-[40%]"
              Logo={SiTailwindcss}
              name="Tailwind"
              category="Style"
            />
            <SkillCard
              id="skillcard1"
              cl="top-[250%] left-[15%]"
              Logo={SiPostman}
              name="Postman"
              category="Api"
            />
            <SkillCard
              id="skillcard1"
              cl="top-[250%] left-[-10%] "
              Logo={FaFigma}
              name="Figma"
              category="Style"
            />
            <SkillCard
              id="skillcard1"
              cl="top-[250%] left-[-35%]"
              Logo={FaReact}
              name="ReactJs"
              category="Frontend"
            />
          </div>
          <div
            ref={cardTwo}
            className="relative justify-center items-center flex gap-[4%] mb-[2%] h-[15vh] w-[100%] "
          >
            <SkillCard
              id="skillcard2"
              cl="top-[250%] left-[40%]"
              Logo={SiMongodb}
              name="Mongo Db"
              category="Database"
            />
            <SkillCard
              id="skillcard2"
              cl="top-[250%] left-[15%]"
              Logo={DiJavascript}
              name="Java Script"
              category="Language"
            />
            <SkillCard
              id="skillcard2"
              cl="top-[250%] left-[-10%]"
              Logo={TbBrandNextjs}
              name="NextJs"
              category="Framework"
            />
            <SkillCard
              id="skillcard2"
              cl="top-[250%] left-[-35%]"
              Logo={SiCanva}
              name="Canva"
              category="Style"
            />
          </div>
          <div
            ref={cardThree}
            className="flex justify-center items-center relative gap-[18%] mb-[2%] h-[15vh] w-[100%] "
          >
            <SkillCard
              id="skillcard3"
              cl="top-[250%] left-[40%]"
              Logo={SiExpress}
              name="Express"
              category="Backend"
            />
            <SkillCard
              id="skillcard3"
              cl="top-[250%] left-[15%]"
              Logo={SiGreensock}
              name="Greensock"
              category="Animation"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
