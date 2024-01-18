"use client";
import React, { useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { getRandomWord } from "../../lib/actions";

export default function HomeSearch() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [randomWord, setRandomWord] = React.useState("");
  const [randomWordLoading, setRandomWordLoading] = React.useState(false);

  async function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/web?search=${search}`);
  }

  async function randomSearch() {
    setRandomWordLoading(true);
    try {
      const word = await getRandomWord();
      setRandomWord(word);
      console.log("random word:", word);
    } catch (error) {
      console.error("Error fetching random word:", error);
    }
  }
  useEffect(() => {
    if (randomWord) {
      setRandomWordLoading(false);
      router.push(`/search/web?search=${randomWord}`);
    }
  }, [randomWord]);

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`flex w-full items-center mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-whithin:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl`}
      >
        <SlMagnifier className="text-xl text-gray-500 mr-3" />
        <input
          className="flex-grow focus:outline-none"
          type="text"
          value={search}
          onChange={(e) => setSearch((prevSearch) => e.target.value)}
          placeholder="Search Google or type a URL"
        />
        <FaMicrophone />
      </form>
      <div className="my-6 flex flex-col sm:flex-row gap-2 justify-center">
        <button className="btn" onClick={() => handleSubmit()}>
          Google Search
        </button>
        <button
          className="btn text-center flex items-center justify-center disabled:opacity-80"
          onClick={() => randomSearch()}
          disabled={randomWordLoading}
        >
          {randomWordLoading ? (
            <img
              src="images/rolling.svg"
              alt="loading svg"
              className="h-6 mx-auto"
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
