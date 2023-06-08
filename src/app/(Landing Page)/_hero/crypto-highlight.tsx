"use client";
import React from "react";
import { useCryptoHighlightQuery } from "@/queries/crypto/r-query";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { formatToCurrency, formatToPercentage } from "@/utils";

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
      {!isError &&
        data?.length &&
        data.map(({ uuid, price, iconUrl, name, change, symbol }) => (
          <div
            className="flex flex-col items-center justify-center space-y-4 text-white"
            key={uuid}
          >
            <div className="h-24 w-24">
              <Image src={iconUrl} width={100} height={100} alt={symbol} />
            </div>
            <div className="space-y-1 text-center">
              <div className={"flex gap-3 text-lg"}>
                <h3 className={"font-semibold"}>{name}</h3>
                <span
                  className={`font-extrabold ${
                    change > 0 ? "text-green-600" : "text-destructive"
                  }`}
                >
                  {formatToPercentage(change / 100)}
                </span>
              </div>
              <div
                className={"text-xl font-bold"}
                title={formatToCurrency(price)}
              >
                {formatToCurrency(price, "compact")}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CryptoHighlight;
