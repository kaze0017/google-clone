import React from "react";
import { searchWeb } from "@/app/lib/actions";
import Link from "next/link";

export default async function page({ searchParams }: any) {
  const query = searchParams.search;
  const data = await searchWeb({ query });
  const result = data?.items || [];
  return (
    <div>
      {result.length > 0
        ? result?.map((item: any, index: number) => (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.snippet || item.htmlSnippet}</p>
              <Link href={item.link}>{item.link}</Link>
            </div>
          ))
        : "No results found"}
    </div>
  );
}
