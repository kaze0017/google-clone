import { openGraphImage } from "@/app/shared-metadata";
import HomeHeader from "@/app/ui/HomeHeader";
import Image from "next/image";

export const metadata = {
  title: "Google Search",
  description: "Google Search",
  openGraphImage,
};

import React from "react";
import HomeSearch from "@/app/ui/HomeSearch";

export default function Google() {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col items-center mt-24 pb-24">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          }
          width={300}
          height={100}
          alt="Google Image"
        />
        <HomeSearch />
      </div>
    </>
  );
}
