"use client"

import React, { useEffect, useState } from 'react'
import Hero from './Hero';
import gsap from "gsap";
import "./Styles.css";
import anime from "animejs";
import About from './About';
import CenterD2 from './CenterD2';
import Skills from './Skills';
import Herod2 from './Herod2';
import SAbout from './SAbout';
import SCenterD2 from './SCenterD2';
import { SiNaver } from 'react-icons/si';
import SNavbar from './SNavbar';
import { createContext } from 'vm';


const HeroAnimation = () => {

    const [count,setCount]=useState(0);
    useEffect (()=>{
         const startcounter = () => {
           let countvalue = 0;
           const updatecounter = () => {
             if (countvalue < 100) {
               let increment = Math.floor(Math.random() * 10) + 1;
               countvalue = Math.min(countvalue + increment, 100);
               setCount(countvalue);
               let delay = Math.floor(Math.random() * 200) + 25;
               setTimeout(updatecounter, delay);
             }
           };
           updatecounter();
         };
         startcounter();
         gsap.to(".count",{opacity:0,delay:3.5,duration:0.5})
         gsap.to(".ml16", { opacity: 0, delay: 3.5, duration: 0.5 });
         gsap.to(".pre-loader", {
           scale: 0.5,
           ease: "power4.inOut",
           duration: 1,
           delay: 2.5,
         });
          gsap.to(".loader",{
            height:"0",
            ease:"power4.inOut",
            duration:0.8,
            delay:3,
          });
          gsap.to(".loader-bg", {
            height: "0",
            ease: "power4.inOut",
            duration: 0.8,
            delay: 3.25,
          });
          gsap.to(".loader-2", {
            clipPath: "polygon(0% 0%,100% 0%,100% 0%, 0% 0%)",
            ease: "power4.inOut",
            duration: 1,
            delay: 2.75,
          });
    },[])
    
  return (
    <>
      <div className="w-full h-[100vh] animationbody ">
        <div className="pre-loader fixed w-[100%] h-[100%] top-0 z-[2]">
          <div className="loader fixed top-0 w-[100%] h-[100%] bg-[#000] text-[#eee] flex justify-center items-center z-[2]"></div>
          <div className="loader-bg fixed block w-[100%] h-[100%] top-0 bg-[#d3bc2a] z-[1]"></div>
        </div>
        <div className="loader-content fixed flex top-[50%] left-[30%] md:left-[35%] xl:left-[40%] 2xl:left-[45%] w-[400px] z-[4] text-[#eee]">
          <div className="count flex-1 leading-none sm:text-[2.5vh] py-[0.5rem] sm:py-0 md:py-[0.3rem] 2xl:py-[0.8rem] px-[1rem] 2xl:px-[1.6rem] text-right">
            {count}
          </div>
          <div className="copy flex-2 leading-none text-[4vh] uppercase">
            <p className="ml16 overflow-hidden inline-block leading-none">
              Welcome
            </p>
          </div>
        </div>
        <div className="loader-2 fixed top-0 w-[100%] h-[100%] z-[1]"></div>
        <div className="relative z-[0] w-[100%] bg-black">
          <SNavbar />
          <Herod2 />
          <SCenterD2 />
          <CenterD2 />
          <About/>
        </div>
      </div>
    </>
  );
}

export default HeroAnimation
