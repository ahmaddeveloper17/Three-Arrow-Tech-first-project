
"use client";
import React, { useState } from "react";

function QuestionAnswer(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`xl:w-[1013px]  2xl:mx-[250px] 3xl:mx-[350px] 4xl:mx-[490px] mx-auto flex flex-col ${
        isExpanded ? "h-auto" : "h-[98px]"
      } justify-between mt-6 border border-Accent2 mx-4 sm:mx-16 md:mx-24 lg:mx-32  rounded-2xl cursor-pointer`}
      style={{ maxWidth: "calc(100% - 40px)" }}
      onClick={toggleExpand}
    >
      <div className="flex justify-between">
        <h1 className="text-Accent pl-[24px] pt-[23px] font-clash-display text-custom-18 font-medium leading-custom-28">
          {props.question}
        </h1>
        <h1 className="text-Accent2 pt-[23px] pr-8">
          {isExpanded ? "-" : "+"}
        </h1>
      </div>
      {isExpanded && (
        <div className="px-6 pb-4">
          <p className="text-Accent pt-4">
            Web3 refers to the third generation of the internet, which focuses
            on decentralization, blockchain technology, and cryptocurrency. It
            aims to create a more open, transparent, and user-centric internet
            by enabling peer-to-peer interactions without intermediaries. Web3
            leverages blockchain{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuestionAnswer;
