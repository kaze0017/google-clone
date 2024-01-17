import { openGraphImage } from "@/app/shared-metadata";
import  HomeHeader  from "@/app/ui/HomeHeader";

export const metadata = {
  title: "Google Search",
  description: "Google Search",
  openGraphImage,
};

import React from "react";

export default function Google() {
  return <>
  <HomeHeader/>
  </>;
}
