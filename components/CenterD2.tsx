"use client"

import React,{useEffect, useRef, useState} from 'react'
import Image from "next/image"
import Cardd2 from './Cardd2';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const CenterD2 = () => {
  let card = useRef<HTMLDivElement | any>();
  let slider = useRef<HTMLDivElement | any>();
  let textprojects = useRef<HTMLDivElement | any>();
    const [CXmove, setCXmove] = useState(0);
    const [LXmove, setLXmove] = useState(0);
    const [IXmove, setIXmove] = useState("");
  useGSAP(()=>{
    const cards = gsap.utils.toArray(slider.current.querySelectorAll(".card"));
    let t1 = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: slider.current,
        end: () => "+=" + slider.current?.offsetWidth,
        scrub: 2,
        pin: true,
        // markers: true, 
      },
    });
    let t2 = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: slider.current,
        end:()=>"+="+ slider.current?.offsetWidth,
        scrub: 2,
        // markers: true,
      },
    });
    t1.to(slider.current,{
        xPercent:-81,
    });
    t2.to(textprojects.current,{
        xPercent:-20,
    })
    cards.forEach((card:any,index) => {
        t1.from(card.querySelector(".content"), {
          y: -390,
          x: -390,
          opacity: 0,
          scrollTrigger: {
            trigger: card.querySelector(".content"),
            start: "left left",
            end: "20% left",
            containerAnimation: t1,
            // markers: true,
            scrub: true,
          },
        })
          .from(card.querySelector(".Link"), {
            y: 100, 
            x: 100,
            opacity: 0,
            scrollTrigger: {
              trigger: card.querySelector(".content"),
              start: "left left",
              end: "20% left",
              containerAnimation: t1,
              // markers: true,
              scrub: true,
            },
          })
          .from(card.querySelector(".img"), {
            right: "50%",
            top: "50%",
            scale: 1.6,
            opacity: 0,
            scrollTrigger: {
              trigger: card.querySelector(".content"),
              start: "left left",
              end: "20% left",
              containerAnimation: t1,
              // markers: true,
              scrub: true,
            },
          });
    });
  })
  return (
    <div
      id="projects"
      className="relative h-[50%] w-[100vw] bg-black z-[0] hidden lg:block"
    >
      <div ref={card} className="overflow-hidden ">
        <div ref={slider} className="slider flex h-[100%] w-[520%] z-10 ">
          <section className="h-[100vh]">
            <Cardd2
              linkcolor="[#140d05]"
              id="card1"
              cl="card w-[100vw] left-[20%]"
              image="/images/Jivan Project.png"
              heading="Jivan Health"
              link="https://www.jivanhealth.in/"
              description="During my internship at Jivan Health Ltd., a cutting-edge startup, I contributed as a frontend developer and played a key role in designing their innovative website. Through collaborative efforts, we crafted a user-friendly interface to enhance the user experience, furthering the company's mission to revolutionize healthcare accessibility."
            />
          </section>
          <section className="h-[100vh]">
            <Cardd2
              linkcolor="[#140d05]"
              id="card2"
              cl="card w-[100vw] left-[10%]"
              image="/images/new Project.png"
              heading="PodcastGen"
              link="https://gen-podcast.vercel.app/"
              description="I developed a podcast platform that empowers users to create and publish their own podcasts using AI technology. The platform features secure user authentication, AI-generated podcast cover images, voice generation in over 10 languages, and genre-based search capabilities for easy content discovery and engagement with other creators."
            />
          </section>
          <section className="h-[100vh]">
            <Cardd2
              linkcolor="[#f5f4f3]"
              id="card3"
              cl="card w-[100vw] left-[10%]"
              image="/images/admin.png"
              link="https://drive.google.com/drive/folders/15kTE8wdHRWOV4cPD9LUfGyZGYFiBbGYj?usp=drive_link"
              heading="Admin Panel"
              description="Integrated OTP-enabled system using Axios and Fetch commands into the admin panel for the Data Science Club, ensuring secure access and authentication. Leveraged modern technologies to fortify data management capabilities, enhancing efficiency and security in club operations."
            />
          </section>
          <section className="h-[100vh]">
            <Cardd2
              linkcolor="[#f5f4f3]"
              id="card4"
              cl="card w-[100vw] left-[10%]"
              image="/images/Group 8.png"
              heading="Friendly Text"
              link="https://friendly-text.vercel.app/"
              description=" Developed a text editing website with multiple features.Enabled text conversion to uppercase, lowercase, capitalized, and inverse case.Implemented functionalities for copying text and removing spaces.Provided real-time word count, character count, and reading time estimation."
            />
          </section>
          <section className="h-[100vh]">
            <Cardd2
              linkcolor="[#f5f4f3]"
              id="card4"
              cl="card w-[100vw] left-[10%]"
              image="/images/Group 7.png"
              heading="Shopping Cart"
              link="https://shoping-cart-umber.vercel.app/"
              description=" Crafted a dynamic e-commerce shopping cart website using React and Context API.Integrated realistic product data through FakeAPI for seamless user interaction.Enhanced functionality with advanced filters: ascending/descending sorting, stock status, fast 
              delivery, and product ratings.Elevated user experience with an intuitive and responsive design, showcasing comprehensive  
              product reviews and ratings."
            />
          </section>
        </div>
      </div>
      <div
        ref={textprojects}
        className="fixed top-[0] h-[100vh] w-[400%] flex overflow-hidden"
      >
        <h1 className="relative text-[50vw] sm:text-[30vh] lg:text-[20vw] 2xl:text-[30vw] text-center text-[#ffffff] h-[10%] left-[5%] sm:left-[15%] top-[20%] z-10">
          Projects
        </h1>
        <h1 className="absolute text-[50vw] sm:text-[30vh] lg:text-[20vw] 2xl:text-[30vw] text-center text-[#f1f0f2] h-[10%] left-[5%]  opacity-40 sm:left-[15.2%] top-[21%]">
          Projects
        </h1>
      </div>
    </div>
  );
}

export default CenterD2
