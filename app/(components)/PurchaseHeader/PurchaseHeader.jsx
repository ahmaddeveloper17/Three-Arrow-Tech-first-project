import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";

function PurchaseHeader() {
  return (
    <div className=" grid sm:grid-cols-2 mt-[100px] sm:mt-[206px]">
      <div className="sm:ml-10 md:ml-40">
        <h1 className="text-Accent subtitle custom-font text-center sm:text-start text-5xl sm:text-6xl font-black leading-[76px] tracking-[1.4px] capitalize mb-[39px]">
          Shop and Subscription
        </h1>
      </div>
      <div className="relative flex justify-center items-center w-[350px] h-[350px] mx-auto">
        <Image
          src={Images.innerGlobe}
          className="w-[260px] h-[260px] inner-globe"
        />
        <Image
          src={Images.outerGlobe}
          className="w-[350px] h-[350px] mb-3 absolute outer-globe"
        />
      </div>
    </div>
  );
}

export default PurchaseHeader;
