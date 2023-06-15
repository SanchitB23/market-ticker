"use client";
import React from "react";
import { Montserrat700 } from "@/styles/fonts";
import { formatToCurrency, formatToPercentage } from "@/utils";
import { useCryptoHighlightQuery } from "@/queries/crypto/r-query";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { DialogTrigger } from "@/components/ui/dialog";

function Hero({
  setCoin,
}: {
  setCoin: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { data, isLoading, isError } = useCryptoHighlightQuery();

  return (
    <section
      id={"hero"}
      className={"flex h-[80vh] flex-col justify-center gap-y-10"}
    >
      <div className={"flex flex-col items-center"} style={Montserrat700.style}>
        <h1
          className={
            "flex flex-col items-center justify-center text-7xl uppercase text-white"
          }
        >
          <span>Track and Trade</span>
          <span
            className={
              "bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent"
            }
          >
            Cryptocurrency
          </span>
        </h1>
      </div>
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
          data?.data &&
          data.data.data.coins.map(
            ({ uuid, price, iconUrl, name, change, symbol }) => (
              <div
                className="flex flex-col items-center justify-center space-y-4 text-white"
                key={uuid}
              >
                <DialogTrigger className={"flex flex-col items-center gap-2"}>
                  <div
                    className="h-24 w-24  hover:cursor-pointer"
                    onClick={() => setCoin(uuid)}
                  >
                    <Image
                      src={iconUrl}
                      width={100}
                      height={100}
                      alt={symbol}
                    />
                  </div>
                  <div
                    onClick={() => setCoin(uuid)}
                    className="space-y-1 text-center  hover:cursor-pointer"
                  >
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
                </DialogTrigger>
              </div>
            )
          )}
      </div>
    </section>
  );
}

export default Hero;
