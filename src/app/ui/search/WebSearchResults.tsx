import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function WebSearchResults({ results }: { results: any }) {
  return (
    <div className="w-full max-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-b my-3">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results?.items?.map((item: any) => (
        <div key={item.link} className="max-w-xl mb-8">
          <div className="group flex flex-col">
            <Link href={item.link} className="text-sm truncate">
              {parse(item.formattedUrl)}
            </Link>
            <Link
              href={item.link}
              className="text-sml group-hover:underline decoration-blue-500 text-xl font-medium truncate text-blue-800"
            >
              {item.title}
            </Link>
          </div>
          <p className="text-gray-600">{item.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
