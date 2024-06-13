import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";

function Enjoy() {
  return (
    <div>
      <div className="grid  sm:grid-cols-2 sm:mt-[50px] lg:mt-[-100px]">
        <div>
          <h1 className="text-center sm:text-start font-poppins sm:ml-[50px] lg:ml-[140px] text-[44px] sm:text-[48px] lg:text-[56px] font-bold leading-[76px] text-custom-black">
            Enjoy
          </h1>
          <p className="text-center sm:text-start sm:ml-[50px] lg:ml-[140px] font-poppins text-[18px] sm:text-[22px]  lg:text-[28px] font-normal leading-[36px] text-custom-black">
            Our benefits as market makers as well as experienced algorithmic
            traders
          </p>
        </div>
        <div className="sm:mt-[50px] lg:mt-[-100px]">
          <Image src={Images.mercury} width={600} height={600} />
        </div>
      </div>
      <div className="grid  sm:grid-cols-2">
        <div className="sm:mt-[50px] lg:mt-[-100px]">
          <Image src={Images.mercury} width={600} height={600} />
        </div>
        <div>
          <h1 className="text-center sm:text-start font-poppins  sm:mt-[148px] sm:ml-[50px] lg:ml-[130px] sm:text-[48px] lg:text-[56px] font-bold leading-[76px] text-custom-black">
            Connecting
          </h1>
          <p className="text-center sm:text-start sm:ml-[50px] lg:ml-[130px] font-poppins text-[18px] sm:text-[22px]  lg:text-[28px] font-normal leading-[36px] text-custom-black">
            Advantages form CEX and DEX area
          </p>
        </div>
      </div>
    </div>
  );
}

export default Enjoy;
