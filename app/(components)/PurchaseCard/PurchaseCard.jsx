"use client";
import { Images } from "@/constants/constant";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

function PurchaseCard() {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleHover = (event) => {
    const { clientX, clientY } = event; // Use clientX and clientY for mouse position relative to the viewport
    setModalPosition({ x: clientX, y: clientY });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative w-[345px] md:w-[609px] h-[236px] pt-[112px] ml-[15px] md:mx-[148px] mb-[25px]">
      <div className="bg-black grid grid-cols-3 md:grid-cols-3 h-52 gap-2 sm:gap-4 border-Accent2 border-2 rounded-2xl">
        <div className="mt-8 sm:mt-2 grid-cols-1 md:grid-cols-3 w-36 sm:w-60">
          <Image src={Images.dolphin} width={260} height={216} />
        </div>
        <div className="sm:ml-6 ml-4">
          <h1 className="text-yellow-500 mt-10 font-poppins text-sm md:text-2xl font-semibold leading-normal capitalize">
            Starter
          </h1>
          <p className="text-Accent font-poppins text-sm md:text-base font-semibold leading-normal">
            100 – 500 USD
          </p>
          <div
            className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent active:bg-Accent2 active:text-Accent bg-Accent2 border-Accent2 w-[90px] md:w-[144px] h-[45px] mt-[20px] py-3 text-center rounded-md cursor-pointer"
            onMouseEnter={handleHover}
            onMouseLeave={handleCloseModal}
          >
            <h2 className="w-[90px] md:w-[143px] h-[28px] font-semibold">
              Purchase
            </h2>
          </div>
        </div>
        <div>
          <h1 className="text-Accent mt-5 sm:mt-11 font-poppins text-sm md:text-lg font-medium leading-normal">
            Binary weekly cap
          </h1>
          <p className="text-Accent font-poppins text-sm md:text-lg font-light leading-normal">
            35.00%
          </p>
          <div className="transition cursor-pointer duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Accent2 active:text-black w-[90px] md:w-[144px] border border-Accent2 h-[45px] mt-[20px] py-3 text-center rounded-md">
            <h2 className="w-[90px] md:w-[143px] h-[28px] text-Accent font-semibold">
              Withdraw
            </h2>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          position={{ x: modalPosition.x, y: modalPosition.y }}
        />
      )}
    </div>
  );
}

export default PurchaseCard;
