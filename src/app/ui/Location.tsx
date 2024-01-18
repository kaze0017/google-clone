"use client";
import React, { useEffect, useState } from "react";

export default function Location() {
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_EX_API_KEY}`;
    console.log("url:", apiUrl);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          city: data.city,
          country: data.country,
        });
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {location.city}, {location.country}
    </div>
  );
}
