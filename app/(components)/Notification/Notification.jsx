"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React, { useState } from "react";

function Notification({ show, onClose, position }) {
  if (!show) {
    return null;
  }

  let positionClass = "";
  if (position === "center-right") {
    positionClass = "sm:top-60  top-64 sm:right-72 transform -translate-y-1/2 mr-4";
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ALL");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-end ${positionClass}`}
    >
      <div className="bg-Accent p-4 rounded-lg w-[400px] mr-4 mx-6">
        <div>
          <Image
            src={Images.close}
            width={30}
            height={30}
            onClick={onClose}
            className="cursor-pointer"
          />
          <h1 className="text-black font-poppins text-center text-2xl font-semibold leading-8 mb-6">
            Notifications
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <button
              onClick={toggleDropdown}
              id="dropdownDefaultButton"
              className="text-white bg-[#404040] ml-1 hover:bg-[#404040] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-44 px-12 py-2.5 text-center inline-flex items-center dark:bg-[#404040] dark:hover:bg-[#404040] dark:focus:ring-[#404040]"
              type="button"
            >
              {selectedOption}{" "}
              <svg
                className={`w-2.5 h-2.5 ms-3 transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${
                dropdownOpen ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-[#404040]`}
              style={{ minWidth: "1rem" }} // Ensure a minimum width of 14rem for the dropdown
            >
              <ul className=" text-sm text-[#404040] dark:text-gray-200 w-full">
                <li>
                  <button
                    onClick={() => handleOptionSelect("ALL")}
                    className={`block px-14 py-2 w-full rounded-md text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedOption === "ALL"
                        ? "bg-gray-100 dark:bg-gray-600 dark:text-white"
                        : ""
                    }`}
                  >
                    ALL
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOptionSelect("Products")}
                    className={`block px-14 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedOption === "Products"
                        ? "bg-gray-100 dark:bg-gray-600 dark:text-white"
                        : ""
                    }`}
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOptionSelect("Promotion")}
                    className={`block px-14 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedOption === "Promotion"
                        ? "bg-gray-100 dark:bg-gray-600 dark:text-white"
                        : ""
                    }`}
                  >
                    Promotion
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOptionSelect("Farms")}
                    className={`block px-14 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedOption === "Farms"
                        ? "bg-gray-100 dark:bg-gray-600 dark:text-white"
                        : ""
                    }`}
                  >
                    Farms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOptionSelect("Rewards")}
                    className={`block px-14 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                      selectedOption === "Rewards"
                        ? "bg-gray-100 dark:bg-gray-600 dark:text-white"
                        : ""
                    }`}
                  >
                    Rewards
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex ml-2 mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Accent2 dark:peer-focus:ring-Accent2 rounded-full peer dark:bg-[#404040] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-Accent2"></div>
              </label>
              <h1 className="text-black ml-2 font-poppins text-md font-medium leading-normal capitalize">
                Important only
              </h1>
            </div>
            <div className="image-container">
              <Image
                src={Images.bell}
                width={110}
                height={420}
                className="vibrate-image"
              />
            </div>
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
