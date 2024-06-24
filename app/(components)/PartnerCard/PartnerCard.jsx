import Image from "next/image";
import React from "react";
import { Images } from "@/constants/constant";

function PartnerCard(props) {
  return (
      <div className="relative">
          <Image src={props.img} width={140} height={140} />
      </div>

  );
}

export default PartnerCard;
