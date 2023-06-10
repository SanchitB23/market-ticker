"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { CryptoData } from "@/types/types";
import { formatToCurrency, formatToPercentage } from "@/utils";

export const columns: ColumnDef<CryptoData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row, column }) => {
      const name: string = row.getValue(column.id);
      const { iconUrl, symbol } = row.original;
      return (
        <div className={"flex items-center gap-3"}>
          <div className="h-8 w-8">
            <Image
              src={iconUrl.split("?")[0]}
              width={100}
              height={100}
              alt={symbol}
            />
          </div>
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row, column }) => {
      const price: number = row.getValue(column.id);
      return (
        <span title={formatToCurrency(price)}>
          {formatToCurrency(price, "compact")}
        </span>
      );
    },
  },
  {
    accessorKey: "change",
    header: "24h Change",
    cell: ({ row, column }) => {
      const percChange: number = row.getValue(column.id);
      return (
        <span
          className={`${
            percChange > 0 ? "text-green-400" : "text-destructive"
          }`}
        >
          {formatToPercentage(percChange / 100)}
        </span>
      );
    },
  },
  {
    accessorKey: "marketCap",
    header: "Market Cap",
    cell: ({ row, column }) => {
      const price: number = row.getValue(column.id);
      return (
        <span title={formatToCurrency(price)}>
          {formatToCurrency(price, "compact")}
        </span>
      );
    },
  },
];
