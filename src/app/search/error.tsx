"use client";

export default function error({ error, reset }: { error: any; reset: any }) {

  return (
    <div className="flex flex-col items-center justify-center   pt-10">
      <h1 className="text-3xl mb-4">Something went wrong.</h1>
      <button onClick={reset} className="text-blue-500">
        Try Again
      </button>
    </div>
  );
}
