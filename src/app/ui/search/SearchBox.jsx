"use client";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import {
  useSearchParams,
  usePathname,
  useRouter,
  useParams,
} from "next/navigation";
import { searchWeb } from "@/app/lib/actions";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [query, setQuery] = React.useState(params.get("search"));


  function handleQuery(query) {
    setQuery(query);
  }
  function deleteQuery() {
    setQuery("");
  }

  function handleSubmit() {
    console.log(query);
    const params = new URLSearchParams(searchParams);
    params.set("search", query);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      className="flex items-center border border-gray-200 rounded-full shadow-lg px-6 py-1 ml-10 mr-5 flex-grow max-w-3xl"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        className="w-full focus:outline-none "
        value={query}
        onChange={(e) => handleQuery(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={deleteQuery}
      />
      <FaMicrophone className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
        onClick={() => handleSubmit()}
      />
    </form>
  );
}
