"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";

function Wallet({ show, onClose, position }) {
  if (!show) {
    return null;
  }

  let positionClass = "";
  if (position === "center-right") {
    positionClass = "top-72   lg:right-72 transform -translate-y-1/2 mr-4";
  }

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-end ${positionClass}`}
    >
      <div className="bg-Accent mt-80 lg:mt-8  p-4 rounded-lg w-[700px] sm:w-[500px]  md:w-[700px] ml-2">
        <div>
          <Image
            src={Images.close}
            width={30}
            height={30}
            onClick={onClose}
            className=" cursor-pointer"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <h1 className="text-black font-poppins text-center text-xl sm:text-2xl font-semibold leading-8 mb-2">
                {" "}
                Connect Wallet
              </h1>
              <p className="text-center font-poppins text-black text-sm sm:text-md font-normal leading-12">
                Start by connecting with one of the wallets below. Be sure to
                store your private keys or seed phrase securely. Never share
                them with anyone.
              </p>
              <div className="flex">
                <div className=" px-2 pt-4">
                  <Image src={Images.lamb}  className="sm:w-60 w-40" />
                  <p className="font-clash-display text-black text-sm font-medium leading-normal capitalize ">
                    Metamask
                  </p>
                </div>
                <div className=" px-2 pt-4">
                  <Image src={Images.lamb} className="sm:w-60 w-40" />
                  <p className="font-clash-display text-black text-sm font-medium leading-normal capitalize">
                    Metamask
                  </p>
                </div>
                <div className=" hidden md:block px-2 pt-4">
                  <Image src={Images.lamb} className="sm:w-60 w-40" />
                  <p className="font-clash-display text-black text-sm font-medium leading-normal capitalize">
                    Metamask
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className=" hidden md:block px-2 pt-4">
                  <Image src={Images.lamb} className="sm:w-60 w-40" />
                  <p className="font-clash-display text-black text-sm font-medium leading-normal capitalize ">
                    Metamask
                  </p>
                </div>
                <div className=" hidden sm:block px-2 pt-4">
                  <Image src={Images.lamb} className="sm:w-60 w-40" />
                  <p className="font-clash-display text-black text-sm font-medium leading-normal capitalize">
                    Metamask
                  </p>
                </div>
                <div className=" px-2 hidden sm:block pt-4">
                  <Image src={Images.lamb} className="sm:w-60 w-40" />
                  <p className="font-clash-display text-black text-sm font-medium leading-normal capitalize">
                    Metamask
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#404040] rounded-lg sm:ml-4">
              <p className="font-poppins text-xl font-semibold text-center leading-10 text-Accent2 pt-4">
                Haven’t got a sm:wallet yet?
              </p>
              <div className=" px-14 pt-4">
                <Image src={Images.wallet} width={250} height={500} />
              </div>
              <div className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 w-72 sm:mx-4 mx-8 mb-8 h-[55px] sm:h-[45px] mt-[20px] sm:py-3 py-4 text-center rounded-md">
                <h2 className=" text-center h-[28] font-semibold">
                  Learn how to connect
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
