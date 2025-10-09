'use client'
import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("Unknown");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await fetch("http://ip-api.com/json/?fields=country,status");
        const data = await res.json();

        if (data.status === "success") {
          setCountry(data.country);
        }
      } catch (error) {
        console.error("Failed to fetch country:", error);
      }
    };

    getCountry();
  }, []);

  return (
    <div>Country: {country}</div>
  );
}

