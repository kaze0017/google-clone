import Link from "next/link";
import React from "react";
import PaginationButtons from "./PaginationButtons";

export default function ImgSearchResults({ results }: any) {
  return (
    <div className="sm:pb-24 pb-40 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  space-x-4">
        {results?.items?.map((result: any) => (
          <div key={result.link} className="mb-4">
            <div className="group">
              <Link href={result.image.contextLink} className="cursor-pointer">
                <img
                  src={result.link}
                  alt={result.title}
                  className="object-contain w-full h-60 group-hover:shadow-xl transition-shadow "
                />
              </Link>
              <Link href={result.image.contextLink} className="cursor-pointer">
                <h2 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink} className="cursor-pointer">
                <p className="group-hover:underline text-gray-800">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
