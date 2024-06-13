
"use client";
import React, { useState } from "react";

function QuestionAnswer(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={` xl:w-[1013px] flex flex-col ${
        isExpanded ? "h-auto" : "h-[72px]"
      } justify-between mt-6 border border-Accent2 mx-4 sm:mx-10 mx:ml-16 rounded-2xl`}
    >
      <div className="flex justify-between">
        <h1 className="text-Accent pl-[24px] pt-[23px] font-clash-display text-custom-18 font-medium leading-custom-28">
          {props.question}
        </h1>
        <h1
          className="text-Accent2 pt-[23px] pr-8 cursor-pointer"
          onClick={toggleExpand}
        >
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
