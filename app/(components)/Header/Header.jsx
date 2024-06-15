import Image from "next/image";
import React from "react";
import { Images } from "@/constants/constant";

function Header() {
  return (
    <div className=" grid sm:grid-cols-2 mt-[100px] sm:mt-[226px] overflow-x-hidden">
      <div className="sm:ml-10 md:ml-40">
        <h1 className="text-Accent subtitle custom-font text-center sm:text-start text-5xl sm:text-6xl font-black leading-[76px] tracking-[1.4px] capitalize mb-[39px]">
          One of the biggest market makers
        </h1>
        <p className=" text-Accent px-6 sm:px-1 font-sans text-center sm:text-start mb-[29px] text-[22px] font-normal leading-[30px]">
          AlgoX capital is where you get access to the best new tokens before
          they list on other centralized or decentralized exchanges.
        </p>
        <div class="flex justify-center items-center sm:items-start sm:justify-start">
          <div className="transition duration-500 cursor-pointer mb-20 sm:mb-[319px] ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 w-[144px] h-[45px] mt-[20px] py-3 text-center rounded-md">
            <h2 className="w-[143px] h-[28px] font-semibold">Connect wallet</h2>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-[350px] h-[350px] mx-auto">
        <Image
          src={Images.innerGlobe}
          className="w-[260px] h-[260px] inner-globe"
        />
        <Image
          src={Images.outerGlobe}
          className="w-[350px] h-[350px] absolute outer-globe"
        />
      </div>
    </div>
  );
}

export default Header;
