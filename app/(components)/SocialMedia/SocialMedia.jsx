import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SocialMedia({ src, alt, link }) {
  return (
    <div>
      <Link href={link} target="_blank">
        <div className="bg-[#FFBF00] w-[38px] h-[38px] flex justify-center items-center rounded-full">
          <Image src={src} alt={alt} />
        </div>
      </Link>
    </div>
  );
}