import React, { useEffect } from "react";
import { IconType } from "react-icons";

interface SkillCardProps {
  id?: string;
  cl?: string;
  Logo?: IconType | undefined;
  name?: string;
  category?: string;
}

const SkillCard = ({ id, cl, Logo, name, category }: SkillCardProps) => {

  return (
    <div
      id={id}
      className={`opacity-0 relative ${cl} h-[7vh] sm:h-[10vh] w-[35vh] bg-[#201f1f] rounded-[1.5vh] sm:rounded-[3vh]`}
    >
      {Logo && (
        <Logo className="invert absolute left-[12%] bottom-[25%] text-[3vh] sm:text-[5vh] mt-[14%] mx-auto" />
      )}
      <div className="absolute left-[25%] top-[50%] h-[0.1vh] w-[5vh] sm:w-[7vh] rotate-90 bg-white"></div>
      <div className="flex flex-col ml-[35%] mt-[6%] md:ml-[29%] sm:mt-[4%] md:mt-[2%]">
        <h3 className="text-[1.5vh] sm:text-[2.6vh] md:text-[3vh] font-semibold text-[#4b4949] text-center">
          {name}
        </h3>
        <p className="text-[1.3vh] sm:text-[2vh] md:text-[2.5vh] text-white text-center">
          {category}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
