import React from "react";
import { searchWeb } from "@/app/lib/actions";
import Link from "next/link";
import WebSearchResults from "@/app/ui/search/WebSearchResults";
export default async function page({ searchParams }: any) {
  const query = searchParams.search;
  const data = await searchWeb({ query });
  const result = data?.items || [];
  return (
    <div>
      {result.length > 0 ? (
        <WebSearchResults results={data} />
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
