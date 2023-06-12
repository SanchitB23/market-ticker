import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCoinDataQuery } from "@/queries/crypto/r-query";
import Image from "next/image";
import {
  formatTimestampToDate,
  formatToCurrency,
  formatToPercentage,
} from "@/utils";
import { spaceGrotesk700 } from "@/styles/fonts";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SparklineChart from "@/components/ui/sparkline";

interface Props {
  setCoin: React.Dispatch<React.SetStateAction<string>>;
  coin: string;
}

function CoinDetailModal({ setCoin, coin }: Props) {
  const { data, isError, isLoading } = useCoinDataQuery(coin);
  if (isLoading) {
    return <span>Loading</span>;
  }
  if (isError || !data) {
    return <span>No Data yet</span>;
  }
  const {
    iconUrl,
    color,
    description,
    name,
    "24hVolume": volume,
    change,
    allTimeHigh,
    listedAt,
    price,
    websiteUrl,
    sparkline,
    uuid,
    marketCap,
    priceAt,
    rank,
    symbol,
  } = data.data.data.coin;
  return (
    <DialogContent
      className={"flex w-screen bg-accent-foreground dark:bg-gray-800"}
      onClose={() => {
        setCoin("");
      }}
    >
      <DialogDescription className={"space-y-2"}>
        <Image src={iconUrl} alt={name} width={400} height={400} />
        <h1
          className={"text-center text-2xl"}
          style={{ color, ...spaceGrotesk700.style }}
        >
          <a href={websiteUrl}>{name}</a>
        </h1>
        <h2
          className={
            "flex justify-around text-lg capitalize text-primary dark:text-white"
          }
        >
          rank:{" "}
          <span className={"font-bold"} style={{ color }}>
            #{rank}
          </span>
        </h2>
        <h3
          title={formatToCurrency(price)}
          className={
            "flex justify-around text-lg capitalize text-primary dark:text-white"
          }
        >
          price:{" "}
          <span className={"font-bold"} style={{ color }}>
            {formatToCurrency(price, "compact")}
          </span>
        </h3>
        <h3
          title={formatToCurrency(marketCap)}
          className={
            "flex justify-around text-lg capitalize text-primary dark:text-white"
          }
        >
          market cap:{" "}
          <span className={"font-bold"} style={{ color }}>
            {formatToCurrency(marketCap, "compact")}
          </span>
        </h3>
      </DialogDescription>
      <DialogHeader className={"flex flex-col justify-around "}>
        <DialogTitle className={"text-md text- grid grid-cols-2 gap-4"}>
          <span>
            24h Change:{" "}
            <span
              className={`font-semibold
                ${change > 0 ? "text-green-400" : "text-destructive"}`}
            >
              {formatToPercentage(change / 100)}
            </span>
          </span>
          <span>
            UpdatedAt:{" "}
            <span
              className={"font-semibold"}
              title={formatTimestampToDate({
                timestamp: priceAt,
                dateTimeOptions: {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              })}
            >
              {formatTimestampToDate({ timestamp: priceAt })}
            </span>
          </span>
          <span>
            24h Volume:{" "}
            <span
              title={formatToCurrency(volume)}
              className={`font-semibold
                ${change > 0 ? "text-green-400" : "text-destructive"}`}
            >
              {formatToCurrency(volume, "compact")}
            </span>
          </span>
          <span>
            first listed on:{" "}
            <span
              className={"font-semibold"}
              title={formatTimestampToDate({
                timestamp: listedAt,
                dateTimeOptions: {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              })}
            >
              {formatTimestampToDate({ timestamp: listedAt })}
            </span>
          </span>
          <span>
            All Time High Price:{" "}
            <span
              title={formatToCurrency(allTimeHigh.price)}
              className={"font-semibold"}
            >
              {formatToCurrency(allTimeHigh.price, "compact")}
            </span>
          </span>
          <span>
            All Time High At:{" "}
            <span
              className={"font-semibold"}
              title={formatTimestampToDate({
                timestamp: allTimeHigh.timestamp,
                dateTimeOptions: {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              })}
            >
              {formatTimestampToDate({ timestamp: allTimeHigh.timestamp })}
            </span>
          </span>
        </DialogTitle>
        <hr className={"mt-0 pt-0"} />
        <DialogDescription className={"space-y-4"}>
          <div className={"w-5/6 text-justify text-secondary-foreground"}>
            {description}
          </div>
          <SparklineChart
            data={sparkline.map((val) => parseFloat(val))}
            title={"Last 7 Days Data"}
          />
        </DialogDescription>
        <DialogFooter>
          <Link
            href={`/crypto/coin/${uuid}`}
            className={buttonVariants({ variant: "outline" })}
          >
            Check {symbol} Ticker <ArrowRight className={"ml-2 h-5 w-5"} />
          </Link>
        </DialogFooter>
      </DialogHeader>
    </DialogContent>
  );
}

export default CoinDetailModal;
