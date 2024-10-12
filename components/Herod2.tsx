"use client"

import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa";
import SplitType from "split-type";
import "./Styles.css"
import Skills from './Skills';
import Menu from './Menu';
import SSkills from './SSkills';
import SCenterD2 from './SCenterD2';
import CenterD2 from './CenterD2';

const Herod2 = () => {
  const [screensize,setScreenSize]=useState("")
  const [isMenu, setIsmenu] = useState(false);
  let navbar = useRef<HTMLDivElement | null>(null);
  let spinner = useRef<HTMLElement | any>();
  let Htext = useRef<HTMLElement | any>();
  let Ssection = useRef<HTMLElement | any>();
  let HSection = useRef<HTMLElement | any>();
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: HSection.current,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        // markers:true,
        pin: true,
      },
    });
    t1.to(Ssection.current,{
      top:"0%",
      left:"0%",
      width:"100%",
      borderRadius:"0",
      scale:1,
    },"a")
    t1.to(
      "#Snav",
      {
        backgroundColor: "black",
      },
      "a"
    )
    gsap.to(Htext.current, {
      scale: 1,
      opacity: 1,
      duration:5,
      ease: "power4.inOut",
    });
  });
  return (
    <>
      <div
        ref={HSection}
        className="relative z-[1] h-[100vh] w-[100vw] pt-[7vh] bg-[#0d0d0d] overflow-hidden"
      >
        <div className="absolute hidden sm:block h-[60%] md:h-[90%] w-[15%] bg-[#0d0d0d] blur-xl md:blur-2xl left-[30%] sm:left-[20%] z-10 top-[35%] md:top-0 md:left-[15%] xl:left-[25%]"></div>
        <div className="absolute h-[10%] w-full sm:w-[65%] sm:top-[35%] sm:right-0 md:h-[25%] md:w-[90%] bg-[#0d0d0d] blur-lg md:blur-2xl top-[50%]  md:left-[20%] z-10 md:top-[-4%] lg:top-[-6%]"></div>
        <div className="absolute h-[10%] w-full bg-[#0d0d0d] blur-md sm:left-[10%] top-[85%] md:top-[90%] z-10 lg:hidden"></div>
        <div className="w-full h-full sm:h-[50%] md:h-full md:w-full top-[20%] sm:top-[40%] md:top-[5%] sm:left-[20%] object-contain absolute md:left-[20%] bottom-[0%] ">
          <Image
            src="/images/WhatsApp Image 2024-08-04 at 18.53.36_3648a82e 1.svg"
            alt="public/images/image.svg"
            fill
            priority
          />
        </div>
        <div className="h-full w-full object-contain absolute ">
          <Image
            src="/images/Ellipse 2.png"
            alt="public/images/Ellipse 2.png"
            fill
            priority
          />
        </div>
        <div className="absolute top-[15%] lg:top-[30%] left-[8%] sm:left-[10%] z-10">
          <h1 className="text-white md:text-[3vh]">Hi, I am Roshan</h1>
          <h1
            ref={Htext}
            className="text-white text-[4vh]  md:text-[5vh] opacity-0 mt-[2%]"
          >
            A Full Stack Web <br /> Developer & Freelancer
          </h1>
          <h1 className="text-white text-[2vh]">Based in India</h1>
          <div className="flex gap-[3%] mt-[4%]">
            <a
              href="/files/Roshan R (1).pdf"
              target="_blank"
              className="relative text-[1.5vh] md:text-[2.8vh] bg-[#e09731] text-white w-[30%] md:w-[35%] h-[3.5vh] md:h-[5vh] rounded-lg hover:bg-[#0d0d0d] hover:text-white hover:border hover:border-[#302f2d] hover:cursor-pointer"
            >
              <p className="absolute left-[2vh] md:left-[3vh] bottom-[0.4vh]">
                Resume
              </p>
              <FaExternalLinkAlt className="absolute text-[1.5vh] md:text-[2vh] right-[20%] lg:right-[2vh] bottom-[1.2vh] md:bottom-[1.5vh]" />
            </a>
            <div className="relative text-[1.5vh] md:text-[2.8vh] bg-[#302f2d]bg-[#0d0d0d] text-white w-[30%] md:w-[35%] h-[3.5vh] md:h-[5vh] rounded-lg hover:bg-[#e09731] hover:text-white border border-[#302f2d] hover:cursor-pointer">
              <a
                href="https://github.com/RoshanR3"
                target="_blank"
                className="absolute left-[2vh] md:left-[3vh] bottom-[0.4vh]"
              >
                Github
              </a>
              <FaExternalLinkAlt className="absolute text-[1.5vh] md:text-[2vh] right-[20%] lg:right-[3vh] bottom-[1.2vh] md:bottom-[1.5vh]" />
            </div>
          </div>
        </div>
        <div
          ref={Ssection}
          className="absolute top-[80%] left-[10%] h-[100%] w-[80%] z-20"
        >
          <SSkills />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default Herod2
