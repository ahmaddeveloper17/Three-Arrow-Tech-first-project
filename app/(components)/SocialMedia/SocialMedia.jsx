import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SocialMedia({ src, alt, link }) {
  return (
    <div>
      <Link href={link} target="_blank">
        <div className="transition duration-500 ease-in-out hover:bg-black hover:text-Accent2 active:bg-black active:text-Accent2 bg-Accent2 border-Accent2 w-[38px] h-[38px] flex justify-center items-center rounded-full">
          <Image src={src} alt={alt} />
        </div>
      </Link>
    </div>
  );
}