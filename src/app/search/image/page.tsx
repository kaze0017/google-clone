import React from "react";
import { searchImg } from "@/app/lib/actions";
import Link from "next/link";
import ImgSearchResults from "@/app/ui/search/ImgSearchResults";
export default async function Page({ searchParams }: any) {
  const query = searchParams.search;
  const index = searchParams.start || "1";
  const data = await searchImg({ query, index });
  const result = data?.items || [];
  return (
    <div className="max-w-6xl mx-auto">
      {result.length > 0 ? (
        <ImgSearchResults results={data} />
      ) : (
        <div className="flex flex-col justify-center items-center mt-4 mb-4">
          <h1>No results found</h1>
          <p>Try different keywords or go back to the homepage </p>
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </div>
      )}
    </div>
  );
}
