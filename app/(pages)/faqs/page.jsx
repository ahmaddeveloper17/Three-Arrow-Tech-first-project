import Footer from "@/app/(components)/Footer/Footer";
import Navbar from "@/app/(components)/Navbar/Navbar";
import PurchaseHeader from "@/app/(components)/PurchaseHeader/PurchaseHeader";
import QuestionAnswer from "@/app/(components)/QuestionAnswer/QuestionAnswer";
import { Images } from "@/constants/constant";
import React from "react";

function page() {
  return (
    <div className="overflow-x-hidden">
      <div className="background-div">
        <Navbar />
        <PurchaseHeader imag={Images.mainQuestionMark} text="Frequent Ask Questions" />
      </div>
      <div>
        <h1 className="text-customBlack text-center mt-[73px] mb-[30px] font-transducer-test text-4xl font-black leading-custom-76 capitalize">
          FAQs
        </h1>
        <div className=" bg-[#404040]  mx-8 mb-28 rounded-2xl h-[900px] ">
          <div className="h-20"></div>
          <QuestionAnswer question="What is Web3?" />
          <QuestionAnswer question="What is a Web3 trading platform?" />
          <QuestionAnswer question="How do I create an account?" />
          <QuestionAnswer question="I suspect fraudulent activity on my account?" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
