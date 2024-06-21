import Image from "next/image";
import { Images } from "@/constants/constant";

function PurchaseCard() {
  return (
    <div className="relative w-[345px] md:w-[609px] h-[236px] pt-[112px] md:mx-[148px] mb-[25px]">
      <div className="bg-black grid grid-cols-3 md:grid-cols-3 h-52 gap-2 md:ml-[-80px] ml-4 sm:gap-4 border-Accent2 border-2 rounded-2xl">
        <div className="mt-8 sm:mt-2 grid-cols-1 md:grid-cols-3 w-36 md:w-60">
          <Image src={Images.dolphin} width={260} height={216} alt="card-img" />
        </div>
        <div className="md:ml-6 ml-4">
          <h1 className="text-yellow-500 mt-10 font-poppins text-sm md:text-2xl font-semibold leading-normal capitalize">
            Starter
          </h1>
          <p className="text-Accent font-poppins text-sm md:text-base font-semibold leading-normal">
            100 – 500 USD
          </p>
          <div className="relative group">
            <button className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent active:bg-Accent2 active:text-Accent bg-Accent2 border-Accent2 w-[90px] md:w-[144px] h-[45px] mt-[20px] py-3 text-center rounded-md">
              <h2 className="w-[90px] md:w-[143px] h-[28px] font-medium">
                Purchase
              </h2>
            </button>
            <div className="fixed z-50 inset-0 bg-opacity-75  md:right-16 flex items-center justify-end opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <div>
                <h1 className="text-Accent font-poppins text-sm md:text-2xl font-semibold leading-normal capitalize">
                  Starter
                </h1>

                <div className="bg-black p-4 rounded-lg w-[400px] mr-4">
                  <h2 className="text-Accent2 font-dm-sans text-custom-28 font-bold normal-case">
                    Staking hub details
                  </h2>
                  <div className="flex mb-1">
                    <Image src={Images.tick} alt="model-img1" />
                    <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
                      Stake ratio 1.0
                    </p>
                  </div>
                  <div className="flex mb-1">
                    <Image src={Images.tick} alt="model-img2" />
                    <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
                      Auto stake ON: 02% daily reward
                    </p>
                  </div>
                  <div className="flex  mb-2">
                    <Image src={Images.tick} alt="model-img3" />
                    <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
                      Auto Stake OFF : up to 0.1% daily rewards
                    </p>
                  </div>
                  <h2 className="text-Accent2 mb-2 font-dm-sans text-custom-28 font-bold normal-case">
                    Bonuses
                  </h2>
                  <div className="flex mb-1">
                    <Image src={Images.tick} alt="model-img4" />
                    <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
                      7% Direct bonus
                    </p>
                  </div>
                  <div className="flex">
                    <Image src={Images.tick} alt="model-img5" />
                    <p className="text-Accent ml-2 font-dm-sans text-custom-20 font-medium normal-case">
                      10% binary bonus
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
  );
}

export default PurchaseCard;
