"use client";
import React from "react";
import { useState } from "react";
import PurchaseModal from "../PurchaceModal/PurchaceModal";
import { Images } from "@/constants/constant";
import Image from "next/image";

export default function PurchaseCard() {
  const [hovered, setHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseModal, setPurchaseModal] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handlePurchaseModalClick = () => {
    setPurchaseModal(true);
  };
  const handleClosePurchaseModal = () => {
    setPurchaseModal(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-[80px] md:gap-[20px] lg:gap-[60px] md:mb-0">
        {/* Card */}
        <div className="relative w-[345px] md:w-[609px] h-[236px]  md:mx-[148px] mb-[25px]">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-black relative group grid grid-cols-3 md:grid-cols-3 h-52 gap-x-2 md:ml-[-80px] ml-4 sm:gap-4 border-Accent2 border-2 rounded-2xl"
          >
            <div className="mt-8 sm:mt-2 grid-cols-1 md:grid-cols-3 w-36 md:w-60">
              <Image
                src={Images.dolphin}
                width={260}
                height={216}
                alt="card-img"
              />
            </div>
            <div className="md:ml-6 ml-4">
              <h1 className="text-yellow-500 mt-10 font-poppins text-sm md:text-2xl font-semibold leading-normal capitalize">
                Starter
              </h1>
              <p className="text-Accent font-poppins text-sm md:text-base font-semibold leading-normal">
                100 – 500 USD
              </p>
              <div onClick={handlePurchaseModalClick}>
                <button className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent active:bg-Accent2 active:text-Accent bg-Accent2 border-Accent2 w-[90px] md:w-[144px] h-[45px] mt-[20px] py-3 text-center rounded-md">
                  <h2 className="w-[90px] md:w-[143px] h-[28px] font-medium">
                    Purchase
                  </h2>
                </button>
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
        </div>

        {/* On Hover Div */}
        {hovered && (
          <div className="">
            <div className="flex flex-col gap-3 z-10">
              <h1 className="text-[#ffffff] text-[1.5rem] ml-[10px] sm:mt-[-50px] mt-[-100px]">
                Starter
              </h1>
              <div className="text-white flex flex-col gap-4 px-[0.7rem] lg:px-[2rem] py-[1rem] bg-[#000] border border-[#FFBF00] rounded-xl">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[#FFBF00] font-medium">
                    Staking Hub Details
                  </h4>
                  <div className="flex flex-col gap-1 ml-1">
                    <p className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1984 0.0585938C5.04034 0.0585938 0.00195312 5.09699 0.00195312 11.255C0.00195312 17.4131 5.04034 22.4515 11.1984 22.4515C17.3564 22.4515 22.3948 17.4131 22.3948 11.255C22.3948 5.09699 17.3564 0.0585938 11.1984 0.0585938ZM8.95908 16.8532L3.36088 11.255L4.93957 9.67633L8.95908 13.6847L17.4572 5.18656L19.0358 6.77645L8.95908 16.8532Z"
                          fill="#FFBF00"
                        />
                      </svg>
                      <span className="text-[0.8rem]">Stake ratio 1.0</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1984 0.0585938C5.04034 0.0585938 0.00195312 5.09699 0.00195312 11.255C0.00195312 17.4131 5.04034 22.4515 11.1984 22.4515C17.3564 22.4515 22.3948 17.4131 22.3948 11.255C22.3948 5.09699 17.3564 0.0585938 11.1984 0.0585938ZM8.95908 16.8532L3.36088 11.255L4.93957 9.67633L8.95908 13.6847L17.4572 5.18656L19.0358 6.77645L8.95908 16.8532Z"
                          fill="#FFBF00"
                        />
                      </svg>
                      <span className="text-[0.8rem]">
                        Auto stake ON: 02% daily reward
                      </span>
                    </p>
                    <p className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1984 0.0585938C5.04034 0.0585938 0.00195312 5.09699 0.00195312 11.255C0.00195312 17.4131 5.04034 22.4515 11.1984 22.4515C17.3564 22.4515 22.3948 17.4131 22.3948 11.255C22.3948 5.09699 17.3564 0.0585938 11.1984 0.0585938ZM8.95908 16.8532L3.36088 11.255L4.93957 9.67633L8.95908 13.6847L17.4572 5.18656L19.0358 6.77645L8.95908 16.8532Z"
                          fill="#FFBF00"
                        />
                      </svg>
                      <span className="text-[0.8rem]">
                        Auto Stake OFF : up to 0.1% daily rewards{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-[#FFBF00] font-medium">Bonuses</h4>
                  <div className="flex flex-col gap-1 ml-1">
                    <p className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1984 0.0585938C5.04034 0.0585938 0.00195312 5.09699 0.00195312 11.255C0.00195312 17.4131 5.04034 22.4515 11.1984 22.4515C17.3564 22.4515 22.3948 17.4131 22.3948 11.255C22.3948 5.09699 17.3564 0.0585938 11.1984 0.0585938ZM8.95908 16.8532L3.36088 11.255L4.93957 9.67633L8.95908 13.6847L17.4572 5.18656L19.0358 6.77645L8.95908 16.8532Z"
                          fill="#FFBF00"
                        />
                      </svg>
                      <span className="text-[0.8rem]">7% Direct bonus</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1984 0.0585938C5.04034 0.0585938 0.00195312 5.09699 0.00195312 11.255C0.00195312 17.4131 5.04034 22.4515 11.1984 22.4515C17.3564 22.4515 22.3948 17.4131 22.3948 11.255C22.3948 5.09699 17.3564 0.0585938 11.1984 0.0585938ZM8.95908 16.8532L3.36088 11.255L4.93957 9.67633L8.95908 13.6847L17.4572 5.18656L19.0358 6.77645L8.95908 16.8532Z"
                          fill="#FFBF00"
                        />
                      </svg>
                      <span className="text-[0.8rem]">10% binary bonus</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isModalOpen && <PurchaseModal func={toggleModal} />}{" "}
      {/* Purchase Modal */}
      <PurchaseModal show={purchaseModal} onClose={handleClosePurchaseModal} />
    </>
  );
}
