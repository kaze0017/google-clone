"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("search");
  const tempStart = searchParams.get("start");
  const startIndex = tempStart ? +tempStart : 1;

  return (
    <div className="text-blue-700 flex px-10 py-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link href={`${pathname}?search=${query}&start=${startIndex - 10}`}>
          <div className="flex flex-col cursor-pointer items-center hove:underline">
            <FaChevronLeft className="h " />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link href={`${pathname}?search=${query}&start=${startIndex + 10}`}>
          <div className="flex flex-col cursor-pointer items-center hove:underline">
            <FaChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
