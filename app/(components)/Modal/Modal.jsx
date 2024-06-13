"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";

function Modal({ show, onClose, position }) {
  if (!show) {
    return null;
  }

  let positionClass = "";
  if (position === "center-right") {
    positionClass = "top-1/2 right-12 transform -translate-y-1/2 mr-4";
  }

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-end ${positionClass}`}
    >
      <div className="bg-black p-4 rounded-lg w-[400px] mr-4">
        <h2 className="text-Accent2 font-dm-sans text-custom-28 font-bold normal-case">
          Staking hub details
        </h2>
        <div className="flex mb-1">
          <Image src={Images.tick} />
          <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
            Stake ratio 1.0
          </p>
        </div>
        <div className="flex mb-1">
          <Image src={Images.tick} />
          <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
            Auto stake ON: 02% daily reward
          </p>
        </div>
        <div className="flex  mb-2">
          <Image src={Images.tick} />
          <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
            Auto Stake OFF : up to 0.1% daily rewards
          </p>
        </div>
        <h2 className="text-Accent2 mb-2 font-dm-sans text-custom-28 font-bold normal-case">
          Bonuses
        </h2>
        <div className="flex mb-1">
          <Image src={Images.tick} />
          <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
            7% Direct bonus
          </p>
        </div>
        <div className="flex">
          <Image src={Images.tick} />
          <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
            10% binary bonus
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
