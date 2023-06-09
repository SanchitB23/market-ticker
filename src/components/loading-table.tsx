import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import { CryptoData } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";
import { spaceGrotesk700 } from "@/styles/fonts";

interface DataTableProps {
  columns: ColumnDef<CryptoData>[];
  limit: number;
}
function LoadingTable<TData>({ columns, limit = 10 }: DataTableProps) {
  return (
    <Table style={spaceGrotesk700.style} className="text">
      <TableHeader
        className={"bg-gradient-to-r from-red-500 to-yellow-500 text-white"}
      >
        <TableRow>
          {columns.map((header, index) => {
            return (
              <TableHead key={index}>{header?.header as string}</TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: limit }).map((_row, index) => (
          <TableRow key={index}>
            {Array.from({ length: columns.length }).map((_cell, i) => (
              <TableCell key={i}>
                {i === 0 ? (
                  <div className={"flex items-center gap-3"}>
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ) : (
                  <Skeleton className="h-4 w-full" />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default LoadingTable;
