import React from "react";
import Image from "next/image";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Images } from "@/constants/constant";

export default function Footer() {
  return (
    <div className="bg-[#404040]">
      <div className="text-center mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-4">
        <Image src={Images.mainIcon} alt="logo" width={120} height={120} />
      </div>
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-white">
          <div className="flex flex-col gap-4">
            <p className="text-center">
              AlgoX is where you get access to the best new tokens before they
              list on other exchanges.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <SocialMedia
                src={Images.facebook}
                alt="facebook"
                link="https://www.facebook.com/"
              />
              <SocialMedia
                src={Images.twitter}
                alt="twitter"
                link="https://www.twitter.com/"
              />
              <SocialMedia
                src={Images.google}
                alt="google"
                link="https://www.google.com/"
              />
              <SocialMedia
                src={Images.youtube}
                alt="youtube"
                link="https://www.youtube.com/"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-Accent transition duration-500 ease-in-out hover:text-Accent2">
              AlgoX Capital
            </p>
            <p className="text-Accent transition duration-500 ease-in-out hover:text-Accent2">
              Exchange
            </p>
            <p className="text-Accent transition duration-500 ease-in-out hover:text-Accent2">
              FAQs
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-Accent transition duration-500 ease-in-out hover:text-Accent2">
              More
            </p>
            <p className="text-Accent transition duration-500 ease-in-out hover:text-Accent2">
              Algorithmic trading
            </p>
            <p className="text-Accent transition duration-500 ease-in-out hover:text-Accent2">
              Market Making
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Newsletter</h1>
            <p className="text-gray-400">
              Keep up to date with our progress. Subscribe for e-mail updates.
            </p>
            <div className="flex items-center mt-4">
              <input
                className="flex-grow bg-transparent placeholder-white border-b border-gray-300 py-1 px-2"
                placeholder="Your email address"
              />
              <button className="ml-2 bg-Accent2 text-white px-4 py-1 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8">
          © All rights reserved by Your Company
        </p>
      </div>
    </div>
  );
}
