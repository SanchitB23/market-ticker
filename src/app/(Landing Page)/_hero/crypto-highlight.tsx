"use client";
import React from "react";
import { useCryptoHighlightQuery } from "@/queries/crypto/r-query";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { getCurrencyCode } from "@/lib/utils";
import DUMMY_DATA from "@/data/crypto-highlight.json";

function CryptoHighlight() {
  const { data, isLoading, isError } = useCryptoHighlightQuery();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoading &&
        Array.from({ length: 4 }).map((_value, index) => (
          <div className="flex flex-col items-center space-y-4" key={index}>
            <Skeleton className="h-20 w-20 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-40" />
            </div>
          </div>
        ))}
      {
        /*!isError &&
        !!data &&
        data?.data temp Do not use original due to API Limit Error*/ DUMMY_DATA.map(
          ({
            id,
            current_price,
            image,
            name,
            price_change_percentage_24h,
            symbol,
          }) => (
            <div
              className="flex flex-col items-center justify-center space-y-4 text-white"
              key={id}
            >
              <div className="h-24 w-24">
                <Image src={image} width={100} height={100} alt={symbol} />
              </div>
              <div className="space-y-1 text-center">
                <div className={"flex gap-3 text-lg"}>
                  <h3 className={"font-semibold"}>{name}</h3>
                  <span
                    className={`font-extrabold ${
                      price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-800"
                    }`}
                  >
                    {new Intl.NumberFormat(navigator.language, {
                      style: "percent",
                      minimumFractionDigits: 2,
                    }).format(price_change_percentage_24h / 100)}
                  </span>
                </div>
                <div className={"text-xl font-bold"}>
                  {new Intl.NumberFormat(navigator.language, {
                    style: "currency",
                    currency: getCurrencyCode(),
                  }).format(current_price)}
                </div>
              </div>
            </div>
          )
        )
      }
    </div>
  );
}

export default CryptoHighlight;
