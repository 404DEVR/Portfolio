"use client"

import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";


interface Cardd2Props {
  cl?: string;
  id?: string;
  link?: string;
  heading?: string;
  image?: string;
  description?: string;
  linkcolor:string
}

const Cardd2 = ({
  cl,
  id,
  heading,
  link = "",
  image = "",
  description,
  linkcolor="",
}: Cardd2Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div id={id} className={`${cl} h-[100%] w-[100%] relative `}>
      <div className="absolute opacity-1  top-[15%] left-[80%]  px-[2%] w-full text-center flex Link text-white">
        <p className=" text-[3vw] ">{heading}</p>
      </div>
      <a href={link} target="_blank">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="img relative h-[60%] w-[60%] xl:w-[50%] left-[50%] top-[70%] right-[-20%] rounded-2xl opacity-1"
        >
          <Image
            fill
            priority
            src={image}
            alt="img"
            className={`${isHovered ? "blur-sm" : ""}`}
          />
          {isHovered && (
            <p className={`absolute h-full w-full left-[40%] top-[70%] text-4xl rounded-4xl opacity-1 text-${linkcolor}`}>
              Open Link
            </p>
          )}
        </div>
      </a>
      <div className="absolute opacity-1 content  text-[2.2vw] xl:text-[1.8vw] top-[25%] left-[15%] w-[80%] text-center text-white ">
        <div className="w-full h-full bg-black absolute blur-md "></div>
        <p className="relative">{description}</p>
      </div>
    </div>
  );
};

export default Cardd2
