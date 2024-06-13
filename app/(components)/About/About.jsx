import Image from "next/image";
import React from "react";
import { Images } from "@/constants/constant";

function About() {
  return (
    <div>
      <div className=" grid sm:grid-cols-3">
        <div className=" col-span-1 sm:mt-[-160px] hidden sm:block">
          <Image src={Images.lines} />
        </div>
        <div>
          <h1 className="text-center sm:text-start lg:ml-16 mb-[50px] mt-[74px] col-span-2 font-transducer-test text-[50px] sm:text-[70px] font-black leading-[76px] tracking-[1.4px] capitalize text-custom-black">
            About
            <span className="font-transducer-test text-[50px] sm:text-[70px] font-black leading-[76px] tracking-[1.4px] capitalize text-Accent2">
              Us
            </span>
          </h1>
          <p className="sm:ml-[-30px] text-center sm:text-start ">
            What are we doing one of the biggest market makers in the market
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
