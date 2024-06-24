"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Enjoy() {
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current) {
              setIsInView1(true);
              observer.unobserve(ref1.current);
            } else if (entry.target === ref2.current) {
              setIsInView2(true);
              observer.unobserve(ref2.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);

    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
    };
  }, []);

  return (
    <div>
      <div className="grid sm:grid-cols-2 sm:mt-[50px] lg:mt-[-100px]">
        <div ref={ref1} className={isInView1 ? "animate-slideIn" : ""}>
          <h1 className="text-center sm:text-start font-poppins sm:ml-[70px] lg:ml-[160px] text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[76px] text-custom-black">
            Enjoy
          </h1>
          <p className="text-center px-6 sm:text-start sm:ml-[50px] lg:ml-[140px] font-poppins text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[36px] text-custom-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at
            voluptatibus molestias provident accusamus inventore earum,
            praesentium voluptate labore! Aliquid fuga nulla est nesciunt
            ducimus. Odio optio, qui aperiam doloribus quis velit nihil deleniti
            quia, distinctio sapiente voluptate nemo sint hic enim quaerat
            reprehenderit ipsum illo neque magni error.
          </p>
        </div>
        <div className="sm:mt-[50px] lg:mt-[-100px] lg:ml-20">
          <Image
            src={Images.coins}
            width={270}
            height={270}
            className="mx-28 w-52 sm:w-72 sm:ml-16 md:ml-28  lg:ml-40 "
          />
          <Image
            src={Images.sun}
            width={270}
            height={270}
            className="mx-28 outer-globe w-52 sm:w-72 sm:ml-16 md:ml-28  lg:ml-40 "
          />
          <Image
            src={Images.plate}
            width={600}
            height={600}
            className="sm:mt-[-40px]"
          />{" "}
        </div>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="sm:mt-[50px] lg:mt-[-40px] lg:ml-28">
          <Image
            src={Images.coins}
            width={270}
            height={270}
            className="mx-28 w-52 sm:w-72 sm:ml-16 md:ml-28  lg:ml-40 "
          />
          <Image
            src={Images.sun}
            width={270}
            height={270}
            className="mx-28 outer-globe w-52 sm:w-72 sm:ml-16 md:ml-28 lg:ml-40 "
          />
          <Image
            src={Images.plate}
            width={600}
            height={600}
            className="sm:mt-[-40px]"
          />
        </div>
        <div ref={ref2} className={isInView2 ? "animate-slideIn" : ""}>
          <h1 className="text-center sm:text-start font-poppins sm:mt-[148px] sm:ml-[70px] lg:ml-[150px] text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-[76px] text-custom-black">
            Connecting
          </h1>
          <p className="text-center px-6  sm:text-start sm:ml-[50px] lg:ml-[130px] font-poppins  text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[36px] text-custom-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at
            voluptatibus molestias provident accusamus inventore earum,
            praesentium voluptate labore! Aliquid fuga nulla est nesciunt
            ducimus. Odio optio, qui aperiam doloribus quis velit nihil deleniti
            quia, distinctio sapiente voluptate nemo sint hic enim quaerat
            reprehenderit ipsum illo neque magni error.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Enjoy;
