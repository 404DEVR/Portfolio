"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Menu from "./Menu";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  isMenu?: boolean;
  setIsmenu?: (e: boolean) => void;
}

const SNavbar = ({
  isMenu = false,
  setIsmenu = () => {},
}: NavbarProps) => {
  const handleNavItemClick = (event: any) => {
    const targetId = event.target.getAttribute("href");
    if (targetId.startsWith("#")) {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        gsap.to(window, {
          duration: 2,
          scrollTo: targetElement,
          ease: "spring",
        });
      }
    }
  };
  
  const [screensize, setScreenSize] = useState("");
  const router = useRouter();
  let navbar = useRef<HTMLDivElement | any>();
  let dissapear = useRef<HTMLDivElement | any>()
  let knowMe = useRef<HTMLDivElement | any>();
  let apear = useRef<HTMLDivElement | any>();
  let secondknowMe = useRef<HTMLDivElement | any>();
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: navbar.current,
        start: "center top",
        end: "bottom top",
        scrub: 2,
        // markers:true,
      },
    });
  });
  return (
    <>
      <div
        ref={navbar}
        id="Snav"
        className="p-3 mx-auto h-[7vh] w-[100%] fixed top-0 z-[99]  overflow-hidden bg-transparent "
      >
        <div className="text-white text-center navtext justify-between mt-[1vh] w-[85%] mx-auto flex">
          <h1
            onClick={() => router.push("/Mainpage")}
            className="text-[1.2vh] sm:text-[2.5vh] w-[50%] sm:w-[45%] text-start hover:cursor-pointer"
          >
            Roshan - full stack developer
          </h1>
          <div className="flex gap-7">
            <div ref={knowMe} className="text-[1.2vh] sm:text-[2.2vh]">
              <a
                href="https://www.linkedin.com/in/roshan-r-7b3633250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="hover:cursor-pointer "
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* <h1
            onClick={() => {
              setIsmenu(!isMenu);
              console.log(isMenu);
            }}
            ref={apear}
            className="absolute right-[-10%] text-[1.2vh] sm:text-[2.5vh] w-[10%] opacity-0 hover:cursor-pointer"
          >
            Menu
          </h1> */}
          <div
            ref={apear}
            className="absolute right-[-10%] text-[1.2vh] sm:text-[2.5vh] w-[10%] opacity-0 hover:cursor-pointer"
          >
            <a
              href="https://github.com/RoshanR3"
              target="_blank"
              className="hover:cursor-pointer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SNavbar;
