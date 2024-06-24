"use client";
const { default: Image } = require("next/image");
import { Images } from "@/constants/constant";
import React, { useState } from "react";
import Link from "next/link";
import Notification from "../Notification/Notification";
import SettingModal from "../SettingModal/SettingModal";
import Wallet from "../Wallet/Wallet";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePurchaseClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleSettingClick = () => {
    setSettingModal(true);
  };
  const handleCloseSettingModal = () => {
    setSettingModal(false);
  };
  const handleWalletClick = () => {
    setWalletModal(true);
  };
  const handleCloseWalletModal = () => {
    setWalletModal(false);
  };

  return (
    <div>
      <nav className="bg-gray-800 bg-transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block  h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex mt-3  ml-[-130px] sm:ml-0">
                <Link href="/">
                  <Image
                    src={Images.mainIcon}
                    className="w-[135px] h-[88px] py-4"
                  />
                </Link>
                <div className="flex sm:hidden border  my-4 border-Accent2 ml-12 py-2 w-[144px] h-[45px] gap-2 justify-center rounded-md transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black">
                  <Image
                    onClick={handlePurchaseClick}
                    src={Images.bellIcon}
                    className="w-[25px] h-[25px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                  <Image
                    src={Images.settingIcon}
                    onClick={handleSettingClick}
                    className="w-[25px] h-[25px] lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                  <Image
                  src={Images.worldIcon}
                    className="w-[25px] h-[25px] lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                </div>
              </div>
              <div className="hidden sm:ml-0 my-2 sm:hidden md:block">
                <div className="flex space-x-4">
                  <Link href="/">
                    <h2 className="text-Accent2 xl:ml-32 font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent">
                      AlgoX capitaL
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      Exchange
                    </h2>
                  </Link>{" "}
                  <Link href="/purchase">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      Trading program
                    </h2>
                  </Link>
                  <Link href="/faqs">
                    <h2 className="text-Accent font-semibold md:mt-8 transition duration-500 ease-in-out hover:text-Accent2">
                      More
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute hidden inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3 flex">
                <div className="flex border border-Accent2 my-3 py-2 w-[144px] h-[45px] mt-[20px] gap-2 justify-center rounded-md transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black">
                  <Image
                    src={Images.bellIcon}
                    onClick={handlePurchaseClick}
                    className="w-[25px] h-[25px] cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                  <Image
                    src={Images.settingIcon}
                    onClick={handleSettingClick}
                    className="w-[25px] h-[25px] cursor-pointer lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                  <Image
                    src={Images.worldIcon}
                    className="w-[25px] h-[25px] cursor-pointer lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                </div>
                <div 
                    onClick={handleWalletClick} className="transition cursor-pointer duration-500 ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 w-[144px] h-[45px] mt-[20px] py-3 ml-[23px] text-center rounded-md">
                  <h2 className="w-[143px] h-[28] font-semibold">
                    Connect wallet
                  </h2>
                </div>
                <div className="transition cursor-pointer duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black w-[144px] border border-Accent2 h-[45px] mt-[20px] py-3 ml-[23px] text-center rounded-md">
                  <h2 className="w-[143px] h-[28] text-Accent font-semibold">
                    SIGN IN
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-2 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                AlgoX capitaL
              </Link>
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Exchange
              </Link>
              <Link
                href="/purchase"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Trading program
              </Link>
              <Link
                href="/faqs"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                More
              </Link>
              <div onClick={handleWalletClick}  className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 w-full h-[45px] mt-[20px] py-3 text-center rounded-md">
                <h2 className=" text-center h-[28] font-semibold">
                  Connect wallet
                </h2>
              </div>
              <div className="transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black w-full border border-Accent2 h-[45px] mt-[20px] py-3 text-center rounded-md">
                <h2 className="text-center h-[28] text-Accent font-semibold">
                  SIGN IN
                </h2>
              </div>
            </div>
          </div>
        )}
        <Notification
          show={showModal}
          onClose={handleCloseModal}
          position="center-right"
        />
        <SettingModal
          show={settingModal}
          onClose={handleCloseSettingModal}
          position="center-right"
        />
        <Wallet
          show={walletModal}
          onClose={handleCloseWalletModal}
          position="center-right"
        />
      </nav>
    </div>
  );
}

export default Navbar;
