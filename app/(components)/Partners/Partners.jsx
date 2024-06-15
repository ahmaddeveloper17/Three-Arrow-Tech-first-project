
// import React from "react";
// import PartnerCard from "../PartnerCard/PartnerCard";
// import { Images } from "@/constants/constant";

// function Partners() {
//   return (
//     <div className="scroll-container">
//       <div className="scroll-content">
//         <div className="partner-card">
//           <PartnerCard name="Bybit" img={Images.first} />
//         </div>
//         <div className="partner-card">
//           <PartnerCard name="Nexo" img={Images.second} />
//         </div>
//         <div className="partner-card">
//           <PartnerCard name="Crypto" img={Images.third} />
//         </div>
//         <div className="partner-card">
//           <PartnerCard name="Bybit" img={Images.first} />
//         </div>
//         <div className="partner-card">
//           <PartnerCard name="Nexo" img={Images.second} />
//         </div>
//         <div className="partner-card">
//           <PartnerCard name="Crypto" img={Images.third} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Partners;


"use client"
import React, { useEffect, useRef } from "react";
import PartnerCard from "../PartnerCard/PartnerCard";
import { Images } from "@/constants/constant";

function Partners() {
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const scrollContent = scrollContentRef.current;
    const firstImage = scrollContent.children[0];
    const firstImageWidth = firstImage.clientWidth;
    const visibleWidth = scrollContent.clientWidth;

    // Calculate the duration based on the first image width
    const duration = (visibleWidth + firstImageWidth) / 100; // Adjust speed factor if needed

    scrollContent.style.animationDuration = `${duration}s`;
  }, []);

  return (
    <div className="scroll-container">
      <div className="scroll-content" ref={scrollContentRef}>
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
