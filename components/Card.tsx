"use cient"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Cardd2Props {
  cl?: string;
  id?: string;
  link?: string;
  heading?: string;
  image?: string;
  description?: string;
}

const Card = ({
  cl,
  id,
  heading,
  link = "",
  image = "",
  description,
}: Cardd2Props) => {
  return (
    <div id={id} className={`${cl} h-[100%] w-[100%] relative `}>
      <div className=" absolute opacity-1  text-white top-[25%] left-[70%]  px-[2%] w-[50%] text-center flex Link sm:left-[105%] md:top-[20%] md:left-[150%]">
        <div className="w-full h-full bg-black absolute blur-md "></div>
        <a href={link} target="_blank" className=" text-[3vh] md:text-[3.2vh] z-10">
          {heading}
        </a>
        <FaExternalLinkAlt className="mt-2 ml-2 text-[2vh] text-white z-10" />
      </div>
      <div className="img absolute h-[50%] w-[120%] left-[10%] top-[50%] right-[-20%] rounded-2xl opacity-1 sm:left-[54%] sm:w-[90%] md:w-[75%] md:left-[119%]">
        <Image fill priority src={image} alt="img" />
      </div>
      <div className=" absolute opacity-1 content text-[3vw] top-[35%] left-[28%] w-[80%] text-center text-white sm:left-[46%] md:top-[30%] md:left-[90%]">
        <div className="w-full h-full bg-black absolute blur-md "></div>
        <p className=" relative">{description}</p>
      </div>
    </div>
  );
};

export default Card;
