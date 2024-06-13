const { default: Image } = require("next/image");
import { Images } from "@/constants/constant";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="bg-gray-800 bg-transparent">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link href="/">
                <Image
                  src={Images.mainIcon}
                  className="w-[135px] h-[84px]   "
                />
              </Link>
              <div class="hidden sm:ml-0  my-2 sm:hidden md:block">
                <div class="flex space-x-4">
                  <Link href="/">
                    <h2 className="text-Accent2 xl:ml-32 font-semibold md:mt-8  transition duration-500 ease-in-out hover:text-Accent ">
                      AlgoX capitaL
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-Accent font-semibold md:mt-8  transition duration-500 ease-in-out hover:text-Accent2 ">
                      Exchange
                    </h2>
                  </Link>{" "}
                  <Link href="/purchase">
                    <h2 className="text-Accent font-semibold md:mt-8  transition duration-500 ease-in-out hover:text-Accent2 ">
                      Trading program
                    </h2>
                  </Link>
                  <Link href="/faqs">
                    <h2 className="text-Accent font-semibold md:mt-8  transition duration-500 ease-in-out hover:text-Accent2 ">
                      More
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div class="absolute hidden inset-y-0  right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3 flex ">
                <div className="flex border border-Accent2 my-3 py-2 w-[144px] h-[45px] mt-[20px] gap-2 justify-center rounded-md transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black">
                  <Image
                    src={Images.bellIcon}
                    className="w-[25px] h-[25px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                  <Image
                    src={Images.settingIcon}
                    className="w-[25px] h-[25px] lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                  <Image
                    src={Images.worldIcon}
                    className="w-[25px] h-[25px] lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
                  />
                </div>

                <div className="transition  duration-500 ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 w-[144px] h-[45px] mt-[20px] py-3 ml-[23px] text-center rounded-md">
                  <h2 className="w-[143px] h-[28] font-semibold">
                    Connect wallet
                  </h2>
                </div>
                <div className=" transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black w-[144px] border border-Accent2 h-[45px] mt-[20px] py-3 ml-[23px] text-center rounded-md">
                  <h2 className="w-[143px] h-[28] text-Accent font-semibold">
                    SIGN IN
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-2 px-2 pb-3 pt-2">
            <Link
              href="/"
              class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              AlgoX capitaL
            </Link>
            <Link
              href="/"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Exchange
            </Link>
            <Link
              href="/purchase"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Trading program
            </Link>
            <Link
              href="/faqs"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              More
            </Link>

            <div className="flex border my-4 border-Accent2 py-2 w-[144px] h-[45px] gap-2 justify-center rounded-md transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black">
              <Image
                src={Images.bellIcon}
                className="w-[25px] h-[25px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
              />
              <Image
                src={Images.settingIcon}
                className="w-[25px] h-[25px] lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
              />
              <Image
                src={Images.worldIcon}
                className="w-[25px] h-[25px] lg:ml-[16px] transition duration-300 ease-in-out hover:bg-black hover:rounded-full"
              />
            </div>

            <div className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 w-[144px] h-[45px] mt-[20px] py-3  text-center rounded-md">
              <h2 className="w-[143px] h-[28] font-semibold">Connect wallet</h2>
            </div>
            <div className=" transition duration-500 ease-in-out hover:bg-Accent2 hover:text-black active:bg-Acctext-Accent2 active:text-black w-[144px] border border-Accent2 h-[45px] mt-[20px] py-3 text-center rounded-md">
              <h2 className="w-[143px] h-[28] text-Accent font-semibold">
                SIGN IN
              </h2>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
