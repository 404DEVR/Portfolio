"use client"

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowTurnDown } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";


const About = () => {
  let spinner = useRef<HTMLElement | any>();
  let Labout = useRef<HTMLElement | any>();
  let LAboutLine = useRef<HTMLElement | any>();
  let LaboutText = useRef<HTMLElement | any>();
  let LaboutText1 = useRef<HTMLElement | any>();
  let LaboutText2 = useRef<HTMLElement | any>();
  useGSAP(()=>{
    let t1=gsap.timeline({
      scrollTrigger:{
        trigger:Labout.current,
        start:"45% 50%",
        end:"100% 50%",
        // markers:true,
        pin:true,
        scrub:2,
      }
    })
    t1.to(LaboutText.current,{
      top:"-6%",
      left:"-5%",
      scale:0.3,
    },"a");
    t1.to(".aboutIcon", {
      opacity:1
    },"a");
    t1.to(
      LAboutLine.current,
      {
        opacity: 1,
      },
      "a"
    );
    const SplitTypes=document.querySelectorAll(".reveal-types")
    SplitTypes.forEach((char:any,i)=>{
      const text=new SplitType(char,{types:'chars'});
      gsap.from(text.chars,{
        scrollTrigger:{
          trigger:char,
          start:"top 60%",
          end:"top 30%",
          scrub:true,
          // markers:true,
        },
        opacity:0.2,
        stagger:0.1,
      })
    })
  })
  return (
    <div
      id="About"
      ref={Labout}
      className="h-[90vh] w-[100vw] bg-black relative overflow-hidden"
    >
      <div className="flex gap-[1%] pt-[2%] pl-[5%] pb-[1%] z-20">
        <div className="skillIcon invert ml-[2%] mt-[2.3%]  text-[2.7vh] sm:text-[3.3vw] ">
          <FaArrowTurnDown />
        </div>
        <h1 className="heading absolute text-[6vw] left-[12%] sm:text-[5vw] text-white">
          About
        </h1>
      </div>
      <div className="relative z-20 h-[0.1vh]  mt-[2%] md:mt-[1%] bg-white w-[90%] mx-auto"></div>
      <div
        ref={LaboutText1}
        className="text-center top-[-30%] w-[90%] mx-auto md:mx-0 md:text-start md:w-[50%] lg:w-[40%] pl-[5%] sm:text-[2.7vw] lg:pl-0 md:text-[2.4vw] lg:text-[2vw] xl:text-[1.7vw] text-white relative md:top-[-26%] lg:left-[8%]"
      >
        <p className="reveal-types">
          Hey there! I'm Roshan, your dedicated Full Stack Developer, blending
          the art of coding with a fervor for fitness and the precision of
          culinary craftsmanship. Join me on a unique journey where technology
          seamlessly intertwines with well-being.
        </p>
      </div>
      <div
        ref={LaboutText2}
        className="text-center top-[-27%] w-[90%] mx-auto md:mx-0 md:text-start md:w-[50%] lg:w-[40%] pl-[5%] lg:pl-0 sm:text-[2.7vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[1.7vw] text-white relative md:top-[-21%] lg:left-[8%]"
      >
        <p className="reveal-types">
          When you collaborate with me, you're not just getting a developer;
          you're gaining a partner who understands the importance of holistic
          success. From building robust web applications to promoting well-being
          through technology, I'm here to make a positive impact.
        </p>
      </div>
      <div className="absolute object-contain w-[90%] h-[60%] sm:w-[60%] sm:h-[50%] top-[20%] right-[4%]  sm:top-[47%] sm:right-[14%] md:w-[40%] xl:w-[50%] xl:h-[50%] md:h-[40%] md:top-[30%] md:right-[5%] xl:right-0 z-10 bg-transparent ">
        <Image
          src="/images/WhatsApp Image 2024-08-04 at 18.53.36_3648a82e 1.svg"
          alt="public/images/WhatsApp Image 2024-08-04 at 18.53.36_3648a82e 1.svg"
          fill
          priority
        />
      </div>
      <div className="absolute object-contain w-full h-full ">
        <Image
          src="/images/Ellipse 1.png"
          alt="public/images/Ellipse 1.png"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default About;
