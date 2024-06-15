"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";

function Notification({ show, onClose, position }) {
  if (!show) {
    return null;
  }

  let positionClass = "";
  if (position === "center-right") {
    positionClass = "top-52  sm:right-72 transform -translate-y-1/2 mr-4";
  }

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-end ${positionClass}`}
    >
      <div className="bg-Accent  p-4 rounded-lg w-[400px] mr-4">
        <div>
          <Image
            src={Images.close}
            width={30}
            height={30}
            onClick={onClose}
            className=" cursor-pointer"
          />
          <h1 className="text-black font-poppins text-center text-2xl font-semibold leading-8 mb-6">
            {" "}
            Notifications
          </h1>
        </div>
        <div className="grid grid-cols-2 ">
          <div>
            <select class="block bg-[#404040] cursor-pointer w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#404040] focus:border-transparent">
              <option value="option2" className="text-Accent">
                ALL
              </option>
              <option value="option2" className="text-Accent">
                Products
              </option>
              <option value="option3" className="text-Accent">
                Promotion
              </option>
              <option value="option3" className="text-Accent">
                Farms
              </option>
              <option value="option3" className="text-Accent">
                Rewards
              </option>
              <option value="option3" className="text-Accent">
                Alerts
              </option>
            </select>
          </div>
          <div className="flex ml-2 mb-4">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Accent2 dark:peer-focus:ring-Accent2 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-Accent2"></div>
            </label>
            <h1 className="text-black ml-2 font-poppins text-md font-medium leading-normal capitalize">
              Important only
            </h1>
          </div>
          <div></div>
          <div className="image-container">
            <Image
              src={Images.bell}
              width={110}
              height={420}
              className="vibrate-image"
            />
          </div>
        </div>
        <h1 className="text-black mt-2 text-center font-poppins text-xl font-medium leading-7">
          Empty
        </h1>
        <h1 className="text-black text-center font-poppins text-sm font-medium leading-7">
          Notifications at the moment
        </h1>
      </div>
    </div>
  );
}

export default Notification;
