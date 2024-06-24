
"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React from "react";
import PurchaseModalButton from "../PurchaseModalButton/PurchaseModalButton";

function PurchaseModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center  backdrop-blur-sm bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-Accent p-4 rounded-lg w-[400px] sm:w-[500px] animate-fadeIn">
        <div>
          <Image
            src={Images.close}
            width={30}
            height={30}
            onClick={onClose}
            className="cursor-pointer"
            alt="close-icon"
          />

          <div className="mx-10">
            <p className="font-bold text-xl text-center">Market Making</p>
            <p className="font-normal pt-2 text-xl text-center">
              Fully managed
            </p>
            <div className="flex">
              <div className="w-32">
                <Image
                  src={Images.dolphin}
                  width={260}
                  height={216}
                  alt="card-img"
                />
              </div>
              <div>
                <p className="text-Accent2 font-semibold mt-4 mb-1.5 ml-1">
                  MM- Pool 1
                </p>
                <hr className="w-24 border-t-1 border-Accent2 mb-1.5" />
                <p className="font-normal text-md">Profit split: 10-30%</p>
              </div>
            </div>
            <div className="ml-3">
              <p className="font-poppins text-sm sm:text-md font-normal leading-8 mt-2 text-left">
                Wallet balance USDT: 000 USDT
              </p>
              <PurchaseModalButton placeholder="Play with club balance" />
            </div>
            <div className="ml-3">
              <p className="font-poppins text-sm sm:text-md font-normal leading-8 mt-2 text-left">
                Other payment methods
              </p>
              <PurchaseModalButton  placeholder="Play with USDT balance" />
            </div>
            <button className="duration-500 ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 mx-16 mt-12 mb-2 rounded-md">
              <p className="font-poppins text-md font-normal leading-[19.62px] text-Accent px-6 sm:px-16 py-2 text-center">
                Purchase Now
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;
