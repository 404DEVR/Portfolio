"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import Image from "next/image"
import "./Styles.css"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import SplitType from "split-type";
import { FaXTwitter } from "react-icons/fa6";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

const Morepage = () => {
  let MoreContact = useRef<HTMLElement | any>();
  let contactText = useRef<HTMLElement | any>();
  useGSAP(()=>{
    console.log(MoreContact.current);
   let t1 = gsap.timeline({
     scrollTrigger: {
       trigger: MoreContact.current,
       start: "top 50%",
       end: "20% 50%",
      //  markers: true,
       scrub: 2,
     },
   });
   t1.from(
     contactText.current,
     {
      opacity:0,
     },
     "a"
   );
  })
  return (
    <div
      ref={MoreContact}
      className="contact relative h-[70vh] w-[100vw] bg-black z-[1] overflow-hidden"
    >
      {/* <div className='absolute h-[40%] lg:h-[60%] w-[150%] lg:w-[90%] lg:left-[4%] left-[-25%]'>
        <Image fill priority src="/images/signature (3).png" alt="signature" />
      </div> */}
      <h1
        id="contactText"
        className="absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-semibold text-center opacity-1  text-[7vh] sm:text-[9vh] md:text-[11vh] lg:text-[13vh] lg:left-[8%] 2xl:text-[17vh] 2xl:top-[45%] top-[45%] md:top-[55%] left-[2%] sm:top-[60%] lg:top-[50%] sm:left-[5%] leading-tight"
      >
        Let's Work Together
      </h1>
      <div
        ref={contactText}
        className="absolute bottom-[25%] left-[30%] text-[1.5vh] sm:text-[3vh] md:text-[3.5vh] lg:text-[4vh] lg:left-[35%] 2xl:left-[37%] sm:bottom-[18%]
         text-white "
      >
        <a
          href="mailto:Roshantvm4@gmail.com"
          target="_blank"
          className="hover:cursor-pointer"
        >
          Roshantvm4@gmail.com
        </a>
      </div>
      <div className="invert absolute bottom-[20%] sm:bottom-[12%] right-[49%] 2xl:right-[51%] flex gap-[50%]">
        <a
          href="https://www.instagram.com/roshan_r_30?igsh=ZGQ1czRmeXZsaWNw"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <FaInstagram className="hover:text-gray-500 text-[2vh] sm:text-[2.3vh] xl:text-[3vh]" />
        </a>
        <a
          href="https://github.com/RoshanR3"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <FaXTwitter className="hover:text-gray-500 text-[2vh] sm:text-[2.3vh] xl:text-[3vh]" />
        </a>
        <a
          href="https://github.com/RoshanR3"
          target="_blank"
          className="hover:cursor-pointer"
        >
          <FaGithub className="hover:text-gray-500 text-[2vh] sm:text-[2.3vh] xl:text-[3vh]" />
        </a>
      </div>
    </div>
  );
}

export default Morepage
