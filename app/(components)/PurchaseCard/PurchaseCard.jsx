
"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal/Modal"; // Make sure to import the Modal component

function PurchaseCard() {
  const [showModal, setShowModal] = useState(false);

  const handlePurchaseClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative w-[335px] md:w-[609px] h-[236px] pt-[112px] ml-[15px] md:ml-[78px] mb-[25px]">
      <div className="bg-black grid grid-cols-3 md:grid-cols-3  gap-4 border-Accent2 border-2 rounded-2xl">
        <div className="mt-2 grid-cols-1 md:grid-cols-3">
          <Image src={Images.dolphin} width={260} height={216} />
        </div>
        <div>
          <h1 className="text-yellow-500 mt-10 font-poppins text-sm md:text-2xl font-semibold leading-normal capitalize">
            Starter
          </h1>
          <p className="text-Accent font-poppins text-sm md:text-base font-semibold leading-normal">
            100 – 500 USD
          </p>
          <div
            className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent active:bg-Accent2 active:text-Accent bg-Accent2 border-Accent2 w-[100px] md:w-[144px] h-[45px] mt-[20px] py-3 text-center rounded-md cursor-pointer"
            onClick={handlePurchaseClick}
          >
            <h2 className="w-[100px] md:w-[143px] h-[28px] font-semibold">Purchase</h2>
          </div>
        </div>
        <div>
          <h1 className="text-Accent mt-11 font-poppins text-sm md:text-lg font-medium leading-normal">
            Binary weekly cap
          </h1>
          <p className="text-Accent font-poppins text-sm md:text-lg font-light leading-normal">
            35.00%
          </p>
          <div className="transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black w-[100px] md:w-[144px] border border-Accent2 h-[45px] mt-[20px] py-3 text-center rounded-md">
            <h2 className="w-[100px] md:w-[143px] h-[28px] text-Accent font-semibold">
              Withdraw
            </h2>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        position="center-right"
      />
    </div>
  );
}

export default PurchaseCard;
