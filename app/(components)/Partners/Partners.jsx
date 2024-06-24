"use client";
import React, { useEffect, useRef, useState } from "react";
import PartnerCard from "../PartnerCard/PartnerCard";
import { Images } from "@/constants/constant";

function Partners() {
  const [isInView2, setIsInView2] = useState(false);
  const ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref2.current) {
              setIsInView2(true);
              observer.unobserve(ref2.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref2.current) observer.observe(ref2.current);

    return () => {
      if (ref2.current) observer.unobserve(ref2.current);
    };
  }, []);

  return (
    <div className="scroll-container">
      <div
        ref={ref2}
        className={
          isInView2
            ? " grid-cols-3 justify-between grid sm:grid-cols-6 animate-slideOut "
            : ""
        }
      >
        <div className="my-8">
          <PartnerCard  img={Images.first} />
        </div>
        <div className=" my-8">
          <PartnerCard  img={Images.second} />
        </div>
        <div className=" my-8">
          <PartnerCard  img={Images.third} />
        </div>
        <div className=" my-8 hidden sm:block" >
          <PartnerCard  img={Images.first} />
        </div>
        <div className=" my-8 hidden sm:block">
          <PartnerCard img={Images.second} />
        </div>
        <div className=" my-8 hidden sm:block">
          <PartnerCard  img={Images.third} />
        </div>
      </div>
    </div>
  );
}

export default Partners;
