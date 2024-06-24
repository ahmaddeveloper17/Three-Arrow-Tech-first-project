"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";
import SettingSmartCard from "../SettingSmartCard/SettingSmartCard";

function SettingModal({ show, onClose, position }) {
  if (!show) {
    return null;
  }

  let positionClass = "";
  if (position === "center-right") {
    positionClass = "top-80 sm:right-72 transform -translate-y-1/2 mr-4";
  }

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-end ${positionClass}`}
    >
      <div className="bg-Accent  p-4 rounded-lg w-[400px]   mx-2  mt-12">
        <div>
          <Image
            src={Images.close}
            width={30}
            height={30}
            onClick={onClose}
            className=" cursor-pointer"
          />
          <h1 className="text-black font-poppins text-center text-2xl font-semibold leading-8 mb-2">
            {" "}
            Settings
          </h1>
        </div>
        <div className="bg-[#404040] rounded-lg">
          <SettingSmartCard text="Products" img={Images.box} />
          <SettingSmartCard text="Promotion" img={Images.speaker} />
          <SettingSmartCard text="Farms" img={Images.box} />
          <SettingSmartCard text="Rewards" img={Images.gift} />
          <SettingSmartCard text="Alerts" img={Images.alert} />
        </div>
      </div>
    </div>
  );
}

export default SettingModal;
