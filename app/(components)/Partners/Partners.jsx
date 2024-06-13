
import React from "react";
import PartnerCard from "../PartnerCard/PartnerCard";
import { Images } from "@/constants/constant";

function Partners() {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <div className="partner-card">
          <PartnerCard name="Bybit" img={Images.first} />
        </div>
        <div className="partner-card">
          <PartnerCard name="Nexo" img={Images.second} />
        </div>
        <div className="partner-card">
          <PartnerCard name="Crypto" img={Images.third} />
        </div>
        <div className="partner-card">
          <PartnerCard name="Bybit" img={Images.first} />
        </div>
        <div className="partner-card">
          <PartnerCard name="Nexo" img={Images.second} />
        </div>
        <div className="partner-card">
          <PartnerCard name="Crypto" img={Images.third} />
        </div>
      </div>
    </div>
  );
}

export default Partners;
