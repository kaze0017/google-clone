"use client";
import React, { useEffect } from "react";

export default function error({ error, reset }: { error: any; reset: any }) {
  useEffect(() => {
    console.log("error: ", error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center   pt-10">
      <h1 className="text-3xl mb-4">Something went wrong.</h1>
      <button onClick={reset} className="text-blue-500">
        Try Again
      </button>
    </div>
  );
}
