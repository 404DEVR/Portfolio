"use client"

import React, { useRef } from 'react'
import "./Styles.css"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CenterD2 from './CenterD2';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  let main = useRef<HTMLElement | any>();
  let content = useRef<HTMLElement | any>();
  let top = useRef<HTMLElement | any>();
  let toph = useRef<HTMLElement | any>();
  let bottomh = useRef<HTMLElement | any>();
  let bottom = useRef<HTMLElement | any>();
  let center = useRef<HTMLElement | any>();
    useGSAP(() => {
      var t1 = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          // markers: true,
          start: "80% 80%",
          end: "230% 80%",
          scrub: true,
          pin: true,
        },
      });
        t1.to(
          top.current,
          {
            top: "-100%",
            duration: 2,
          },
          "a"
        )
          .to(
            bottom.current,
            {
              bottom: "-100%",
              duration: 2,
            },
            "a"
          )

          
    }, { scope: main });
  return (
    <div
      ref={main}
        className="main relative h-[100vh] w-[100%] text-[10vh] overflow-hidden bg-white z-[4]"
    >
      <div
       className="center absolute h-[100%] w-[100%] bg-black">
          <CenterD2/>
      </div>
      <div
        ref={top }
        className="top project-text absolute overflow-hidden top-0 h-[50vh] w-[100%] bg-white"
      >
        <h1
          ref={toph}
          className="absolute left-[20%] top-[10vh] text-[22vw] "
        >
          Projects
        </h1>
      </div>
      <div
        ref={bottom }
        className="bottom project-text overflow-hidden absolute bottom-0 h-[50vh] w-[100%] bg-white"
      >
        <h1
          ref={bottomh}
          className="absolute left-[20%] bottom-[21vh] text-[22vw]"
        >
          Projects
        </h1>
      </div>
    </div>
  );
}

export default Projects
