import Image from "next/image";
import React from "react";

function PurchaseHeader(props) {
  return (
    <div className=" grid sm:grid-cols-2 mt-[100px] sm:mt-[206px]">
      <div className="sm:ml-10 md:ml-40">
        <h1 className="text-Accent subtitle custom-font text-center sm:text-start text-5xl sm:text-6xl font-black leading-[76px] tracking-[1.4px] capitalize mb-[39px]">
          Shop and Subscription
        </h1>
      </div>
      <div className=" justify-center items-center sm:mt-[-70px] w-[350px] h-[350px] mx-auto">
        <Image src={props.img} className="w-[260px] h-[260px] inner-globe" />
      </div>
    </div>
  );
}

export default PurchaseHeader;
